import React from "react";
import "./Panel.css";

const Panel = props => (
  <div className="container">
    <ul className="field1">
      <li className="released">
        Released:{" "}
        <span className="spanReleased">{props.newState.released}</span>{" "}
      </li>
      <li className="actor">
        Actor:<span className="spanActor">{props.newState.actor}</span>{" "}
      </li>
      <li className="show">
        Show: <span className="spanShow">{props.newState.show}</span>{" "}
      </li>
    </ul>
  </div>
);

export default Panel;
