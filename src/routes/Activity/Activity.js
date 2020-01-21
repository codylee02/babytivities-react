import React from "react";

import "./Activity.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import STORE from "../../STORE";

export default function Activity(props) {
  const activityId = props.match.params.id;

  //find the activity
  const activity = STORE.find(element => element.id === Number(activityId));
  const materials = activity.materials.map(item => <li>{item}</li>);
  console.log(activity);
  return (
    <article className="Activity">
      <div className="Activity__title">
        <h1>{activity.title}</h1>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="Activity__meta-info">
        <span>{activity.age}</span> <span>{activity.activityType}</span>
      </div>
      <img
        className="Activity__image"
        src="https://picsum.photos/200"
        alt="placeholder"
      />
      <h2>Supplies:</h2>
      <ul>{materials}</ul>
      <h2>How to play:</h2>
      <p>{activity.instructions}</p>
    </article>
  );
}
