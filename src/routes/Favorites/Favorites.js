import React from "react";
import "./Favorites.css";
import ActivityListItem from "../../components/ActivityListItem/ActivityListItem";
import STORE from "../../STORE";

export default function Favorites(props) {
  const favorites = STORE.filter(activity => activity.favorite === true);
  const favoriteActivities = favorites.map(activity => (
    <ActivityListItem key={activity.id} activity={activity} />
  ));

  return (
    <div className="Activities">
      <h1>Favorites</h1>
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
      <ul className="Activities__ul">{favoriteActivities}</ul>
    </div>
  );
}
