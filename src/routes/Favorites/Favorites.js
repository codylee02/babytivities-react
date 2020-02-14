import React from "react";
import "./Favorites.css";
import ActivityListItem from "../../components/ActivityListItem/ActivityListItem";
import BabytivitiesContext from "../../context/BabytivitiesContext";
import FavoritesApiService from "../../services/favorites-api-service";
import ActivitiesApiService from "../../services/activities-api-service";
import ActivityFilter from "../../components/ActivityFilter/ActivityFilter";

export default class Favorites extends React.Component {
  static contextType = BabytivitiesContext;

  componentDidMount() {
    FavoritesApiService.getFavorites()
      .then(this.context.setFavoritesList)
      .catch(this.context.setError);
  }

  renderFavoriteActivities() {
    const { activitiesList = [] } = this.context;
    const { favoritesList = [] } = this.context;
    const userFavorites = activitiesList.filter(activity =>
      favoritesList.find(({ activity_id }) => activity.id === activity_id)
    );

    if (this.context.activitiesList.length === 0) {
      ActivitiesApiService.getActivities()
        .then(this.context.setActivitiesList)
        .catch(this.context.setError);
    }

    return userFavorites.map(favorite => (
      <ActivityListItem key={favorite.id} activity={favorite} />
    ));
  }

  render() {
    const { error } = this.context;

    return (
      <div className="Activities">
        <h1>Favorites</h1>
        <ActivityFilter />
        <ul className="Activities__ul">
          {error ? <p>There was an error</p> : this.renderFavoriteActivities()}
        </ul>
      </div>
    );
  }
}
