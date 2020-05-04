import React from "react";

//delete btn with props passed in
const DeleteBtn = props => (
  <button className="delete-btn" id="deleteBtn" {...props}>Delete</button>
);

export default DeleteBtn;