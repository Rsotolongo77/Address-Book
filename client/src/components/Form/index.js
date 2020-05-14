import React from "react";

//export functions to be used in form on contact page
const Input = props => (
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>
);

const TextArea = props => (
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>
);


const FormBtn = props => (
  <button {...props} className="btn" id="formBtn" type="submit" />
);

export { Input, TextArea, FormBtn };
