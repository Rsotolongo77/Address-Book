import React from "react";

//creat jumbotron and pass children
function Jumbotron(props) {
  return (
    <div className="jumbotron">
      {props.children}
    </div>
  );
}

export default Jumbotron;