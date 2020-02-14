import React from "react";
import "./ActivityFilter.css";

export default function ActivityFilter() {
  // onChange = run the filter func.
  return (
    <div className="ActivityFilter">
      Type:{" "}
      <select>
        <option>All</option>
        <option>Physical</option>
        <option>Literacy</option>
        <option>Sensory</option>
        <option>Science</option>
        <option>Art</option>
      </select>
      {"  "}
      Age:{" "}
      <select>
        <option>All</option>
        <option>0-3 Months</option>
        <option>4-6 Months</option>
        <option>7-12 Months</option>
        <option>13-24 Months</option>
        <option>25-36 Months</option>
        <option>36 Months and Up</option>
      </select>
    </div>
  );
}
