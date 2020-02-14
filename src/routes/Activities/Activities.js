import React from "react";
import "./Activities.css";
import ActivityListItem from "../../components/ActivityListItem/ActivityListItem";
import BabytivitiesContext from "../../context/BabytivitiesContext";
import ActivitiesApiService from "../../services/activities-api-service";
import ActivityFilter from "../../components/ActivityFilter/ActivityFilter";

export default class Activities extends React.Component {
  static contextType = BabytivitiesContext;

  componentDidMount() {
    ActivitiesApiService.getActivities()
      .then(this.context.setActivitiesList)
      .catch(this.context.setError);
  }

  renderActivities() {
    const { activitiesList = [] } = this.context;
    return activitiesList.map(activity => (
      <ActivityListItem key={activity.id} activity={activity} />
    ));
  }
  render() {
    const { error } = this.context;

    return (
      <div className="Activities">
        <h1>Activities</h1>
        <ActivityFilter />

        <ul className="Activities__ul">
          {error ? <p>There was an error</p> : this.renderActivities()}
        </ul>
      </div>
    );
  }
}
