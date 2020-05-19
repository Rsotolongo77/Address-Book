import React from "react";

//export functions that allow use of bootstrap without worrying about spacing issues with bootstraps fluid syntax 
const Container = (props) => (
  <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
);


const Row = (props) => (
  <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
);

//allows resize of Col in bootstrap with slightly less syntax
const Col = (props) => (
  <div className={props.size
    .split(" ")
    .map(size => "col-" + props.size)
    .join(" ")}>

    {props.children}
  </div>
);

export { Container, Row, Col };
