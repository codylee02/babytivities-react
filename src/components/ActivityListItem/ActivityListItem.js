import React from "react";
import { Link } from "react-router-dom";
import "./ActivityListItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ActivityListItem(props) {
  return (
    <li className="ActivityListItem">
      <div className="ActivityListItem__title">
        <Link to={`activities/${props.activity.id}`}>
          {props.activity.title}
        </Link>
        <div className="ActivityListItem__meta">
          <span> {props.activity.age}</span>{" "}
          <span>{props.activity.activityType}</span>
        </div>
      </div>
      <div className="ActivityListItem__favorite">
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </li>
  );
}
