import React from "react";
import "./Favorites.css";
import ActivityListItem from "../../components/ActivityListItem/ActivityListItem";
import BabytivitiesContext from "../../context/BabytivitiesContext";
import FavoritesApiService from "../../services/favorites-api-service";
import ActivitiesApiService from "../../services/activities-api-service";
import ActivityFilter from "../../components/ActivityFilter/ActivityFilter";

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "all",
      age: "all"
    };
  }

  static contextType = BabytivitiesContext;

  onFilterChange = filterObj => {
    let filter = Object.keys(filterObj);

    this.setState({
      [filter]: filterObj[filter]
    });
  };

  componentDidMount() {
    FavoritesApiService.getFavorites()
      .then(this.context.setFavoritesList)
      .catch(this.context.setError);
  }

  renderFavoriteActivities() {
    let age = this.state.age;
    let type = this.state.type;
    let { activitiesList = [] } = this.context;
    const { favoritesList = [] } = this.context;

    if (this.context.activitiesList.length === 0) {
      ActivitiesApiService.getActivities()
        .then(this.context.setActivitiesList)
        .catch(this.context.setError);
    }

    if (age !== "all" || type !== "all") {
      let filteredList = activitiesList;

      if (age !== "all") {
        filteredList = filteredList.filter(activity => activity.age === age);
      }

      if (type !== "all") {
        filteredList = filteredList.filter(activity => activity.type === type);
      }

      activitiesList = filteredList;
    }

    let userFavorites = activitiesList.filter(activity =>
      favoritesList.find(({ activity_id }) => activity.id === activity_id)
    );

    return userFavorites.map(favorite => (
      <ActivityListItem key={favorite.id} activity={favorite} />
    ));
  }

  render() {
    const { error } = this.context;

    return (
      <div className="Activities">
        <h1>Favorites</h1>
        <ActivityFilter onFilterChange={this.onFilterChange} />
        <ul className="Activities__ul">
          {error ? <p>There was an error</p> : this.renderFavoriteActivities()}
        </ul>
      </div>
    );
  }
}
