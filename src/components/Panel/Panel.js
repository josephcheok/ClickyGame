import React from "react";
import "./Panel.css";

const Panel = props => (
  <div className="container">
    <ul className="field1">
      <li className="actor">
        Actor:<span>{props.newState.actor}</span>{" "}
      </li>
      <li className="show">
        Show: <span>{props.newState.show}</span>{" "}
      </li>
      <li className="released">
        Released: <span>{props.newState.released}</span>{" "}
      </li>
    </ul>
  </div>
);

export default Panel;
