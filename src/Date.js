import React from "react";
import "./index.css";

export default function Date() {
  return (
    <div>
      <div className="date" id="date">
        Tuesday, January 25th, 2022
      </div>
      <div className="time" id="time">
        12:00PM
      </div>
    </div>
  );
}
