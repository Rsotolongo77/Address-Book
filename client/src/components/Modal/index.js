import React from 'react';

const Modal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                {props.children}
                <button className="modal-btn" onClick={props.handleClose}>close</button>
            </div>
        </div>
    );
};

export default Modal;

