import React from 'react';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main">
                {children}
                <button className="modal-btn" onClick={handleClose}>close</button>
            </div>
        </div>
    );
};

export default Modal;

