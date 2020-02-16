import React from "react";
import "./ActivityFilter.css";

export default function ActivityFilter(props) {
  // onChange = run the filter func.
  return (
    <div className="ActivityFilter">
      Type:{" "}
      <select onChange={e => props.onFilterChange({ type: e.target.value })}>
        <option value="all">All</option>
        <option value="Physical">Physical</option>
        <option value="Literacy">Literacy</option>
        <option value="Sensory">Sensory</option>
        <option value="Science">Science</option>
        <option value="Art">Art</option>
      </select>
      {"  "}
      Age:{" "}
      <select onChange={e => props.onFilterChange({ age: e.target.value })}>
        <option value="all">All</option>
        <option value="0-3m">0-3 Months</option>
        <option value="4-6m">4-6 Months</option>
        <option value="7-12m">7-12 Months</option>
        <option value="13-24m">13-24 Months</option>
        <option value="25-36m">25-36 Months</option>
        <option value="36m+">36 Months and Up</option>
      </select>
    </div>
  );
}
