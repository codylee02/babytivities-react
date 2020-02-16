import React from "react";
import "./Activity.css";
import ActivitiesApiService from "../../services/activities-api-service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class Activity extends React.Component {
  static defaultProps = {
    match: { params: { activity: { id: "" } } }
  };
  constructor(props) {
    super(props);
    this.state = {
      activity: {
        id: "",
        age: "",
        instructions: "",
        materials: [],
        title: "",
        type: ""
      }
    };
  }

  componentDidMount() {
    let activityId = this.props.match.params.id;
    console.log(activityId);
    ActivitiesApiService.getActivity(activityId).then(activity =>
      this.setState({ activity: { ...activity } })
    );
  }

  render() {
    const materials = this.state.activity.materials.map(item => (
      <li key={item.id}>{item.item}</li>
    ));
    return (
      <article className="Activity">
        <div className="Activity__title">
          <h1>{this.state.activity.title}</h1>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="Activity__meta-info">
          <span>{this.state.activity.age}</span>{" "}
          <span>{this.state.activity.type}</span>
        </div>
        <h2>Supplies:</h2>
        <ul>{materials}</ul>
        <h2>How to play:</h2>
        <p>{this.state.activity.instructions}</p>
      </article>
    );
  }
}
