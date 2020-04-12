import React from "react";

//creat jumbotron and pass children
const Jumbotron = props => (
  <div className="jumbotron">
    {props.children}
  </div>
);

export default Jumbotron;