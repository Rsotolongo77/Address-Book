import React from "react";

//export functions that allow use of bootstrap without worrying about class names
const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
);


const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
);

//allows resize of Col in bootstrap with slightly less syntax
const Col = ({ size, children }) => (
  <div className={size
    .split(" ")
    .map(size => "col-" + size)
    .join(" ")}>

    {children}
  </div>
);

export { Container, Row, Col };
