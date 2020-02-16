import React from "react";
import { Link } from "react-router-dom";
import "./ActivityListItem.css";
import FavoriteToggle from "../../components/FavoriteToggle/FavoriteToggle";

export default function ActivityListItem(props) {
  return (
    <li className="ActivityListItem">
      <div className="ActivityListItem__title">
        <Link to={`activities/${props.activity.id}`}>
          {props.activity.title}
        </Link>
        <div className="ActivityListItem__meta">
          <span> {props.activity.age}</span> <span>{props.activity.type}</span>
        </div>
      </div>
      <div className="ActivityListItem__favorite">
        <FavoriteToggle activityId={props.activity.id} />
      </div>
    </li>
  );
}
