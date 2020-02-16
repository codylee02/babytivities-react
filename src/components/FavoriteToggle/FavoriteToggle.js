import React from "react";
import "./FavoriteToggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import BabytivitiesContext from "../../context/BabytivitiesContext";
import TokenService from "../../services/token-service";
import FavoritesApiService from "../../services/favorites-api-service";
import { Redirect } from "react-router-dom";

const heartColorSetter = (activityId, context, cb) => {
  let { favoritesList = [] } = context;

  const activityIds = favoritesList.map(fav => fav.activity_id);
  const isFavorite = activityIds.includes(activityId);

  if (isFavorite) {
    cb();
  }
};

export default class FavoriteToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartColor: "gray",
      redirect: false
    };
  }

  static contextType = BabytivitiesContext;

  setStateRed = () => {
    this.setState({
      heartColor: "red"
    });
  };

  componentDidMount() {
    heartColorSetter(this.props.activityId, this.context, this.setStateRed);
  }

  handleFavoriteToggle = activityId => {
    const activityIds = this.context.favoritesList.map(fav => fav.activity_id);
    const isFavorite = activityIds.includes(activityId);
    const favorite = this.context.favoritesList.filter(
      fav => fav.activity_id === activityId
    );

    if (isFavorite) {
      const newFavorites = this.context.favoritesList.filter(
        fav => favorite[0].id !== fav.id
      );

      FavoritesApiService.removeFavorite(favorite[0].id)
        .then(() => this.context.setFavoritesList(newFavorites))
        .then(() => this.setState({ heartColor: "gray" }));
    }

    if (!isFavorite) {
      if (TokenService.hasAuthToken()) {
        FavoritesApiService.addFavorite(activityId)
          .then(res =>
            this.context.setFavoritesList([...this.context.favoritesList, res])
          )
          .then(() => this.setState({ heartColor: "red" }));
      } else this.setState({ redirect: true });
    }
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <FontAwesomeIcon
        icon={faHeart}
        color={this.state.heartColor}
        onClick={() => this.handleFavoriteToggle(this.props.activityId)}
      />
    );
  }
}
