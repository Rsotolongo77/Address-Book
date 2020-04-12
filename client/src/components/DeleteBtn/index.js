import React from "react";

//delete btn with props passed in
const DeleteBtn = props => (
  <span className="delete-btn" id="deleteBtn" {...props}>Delete</span>
);

export default DeleteBtn;