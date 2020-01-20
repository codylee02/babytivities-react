import React from "react";
import "./Activities.css";
import ActivityListItem from "../../components/ActivityListItem/ActivityListItem";
import STORE from "../../STORE";

export default function Activities(props) {
  const activities = STORE.map(activity => (
    <ActivityListItem activity={activity} />
  ));

  return (
    <div className="Activities">
      <h1>Activities</h1>
      <ul className="Activities__ul">{activities}</ul>
    </div>
  );
}
