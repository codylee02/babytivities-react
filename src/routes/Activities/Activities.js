import React from "react";
import "./Activities.css";
import ActivityListItem from "../../components/ActivityListItem/ActivityListItem";
import BabytivitiesContext from "../../context/BabytivitiesContext";
import ActivitiesApiService from "../../services/activities-api-service";
import FavoritesApiService from "../../services/favorites-api-service";
import ActivityFilter from "../../components/ActivityFilter/ActivityFilter";
import TokenService from "../../services/token-service";

export default class Activities extends React.Component {
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
    //if user is authed, check for favorites. THEN get the activities list
    if (TokenService.hasAuthToken()) {
      let { favoritesList = [] } = this.context;

      if (favoritesList.length === 0) {
        FavoritesApiService.getFavorites()
          .then(this.context.setFavoritesList)
          .then(() =>
            ActivitiesApiService.getActivities()
              .then(this.context.setActivitiesList)
              .catch(this.context.setError)
          )
          .catch(this.context.setError);
      }
    } else {
      ActivitiesApiService.getActivities()
        .then(this.context.setActivitiesList)
        .catch(this.context.setError);
    }
  }

  renderActivities = () => {
    let age = this.state.age;
    let type = this.state.type;
    let { activitiesList = [] } = this.context;

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

    return activitiesList.map(activity => (
      <ActivityListItem key={activity.id} activity={activity} />
    ));
  };

  render() {
    const { error } = this.context;

    return (
      <div className="Activities">
        <h1>Activities</h1>
        <ActivityFilter onFilterChange={this.onFilterChange} />
        <ul className="Activities__ul">
          {error ? <p>There was an error</p> : this.renderActivities()}
        </ul>
      </div>
    );
  }
}
