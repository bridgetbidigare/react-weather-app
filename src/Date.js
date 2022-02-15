import React from "react";
import Moment from "react-moment";
import "./App.css";

export default function Date(props) {
  const dateToFormat = props.date;

  return (
    <div>
      <Moment className="date" format="dddd, MMMM DD, YYYY">
        {dateToFormat}
      </Moment>
      <br />
      <Moment className="time" format="h:mmA">
        {dateToFormat}
      </Moment>
    </div>
  );
}
