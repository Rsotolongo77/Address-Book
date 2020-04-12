import React from "react";
import "./list.css";

//export functions to pass children onto list elements
const List = props => (
  <div className="list-overflow-container">
    <ul className="list-group">{props.children}</ul>
  </div>
);

const ListItem = props => (
  <li id="listItem" className="list-group-item">{props.children}</li>
);

export { List, ListItem };
