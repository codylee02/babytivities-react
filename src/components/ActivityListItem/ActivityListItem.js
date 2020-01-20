import React from "react";
import { Link } from "react-router-dom";
import "./ActivityListItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ActivityListItem(props) {
  return (
    <li className="ActivityListItem">
      <Link to={`activities/${props.activity.id}`}>{props.activity.title}</Link>
      <FontAwesomeIcon icon={faHeart} />
    </li>
  );
}
