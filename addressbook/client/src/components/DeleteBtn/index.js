import React from "react";

//delete btn with props passed in
function DeleteBtn(props) {
  return (
    <button className="delete-btn" id="deleteBtn" {...props}>Delete Contact</button>
  );
}

export default DeleteBtn;