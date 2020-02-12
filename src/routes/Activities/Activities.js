import React from "react";
import "./Activities.css";
import ActivityListItem from "../../components/ActivityListItem/ActivityListItem";
import BabytivitiesContext from "../../context/BabytivitiesContext";
import ActivitiesApiService from "../../services/activities-api-service";

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
        <div>
          Type:
          <select>
            <option>All activity types</option>
            <option>Sensory</option>
            <option>Critical Thinking</option>
          </select>
        </div>
        <div>
          Age:
          <select>
            <option>All ages</option>
            <option value="0-12m">0 - 12 Months</option>
            <option value="13-24m">13 - 24 Months</option>
            <option value="25-36m">25 - 36 Months</option>
          </select>
        </div>
        <ul className="Activities__ul">
          {error ? <p>There was an error</p> : this.renderActivities()}
        </ul>
      </div>
    );
  }
}
