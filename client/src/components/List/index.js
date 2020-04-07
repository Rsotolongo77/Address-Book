import React from "react";
import "./list.css";

//export functions to pass children onto list elements
export function List(props) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{props.children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (
    <li id="listItem" className="list-group-item">{props.children}</li>
  );
}
