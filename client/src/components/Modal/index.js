import React from 'react'

const Modal = (props) => {
    let modalClasses = 'modal';
    if (props.show) {
        modalClasses = 'modal-open';
    }
    return (
        <div className={modalClasses}>
            <h4>First and last name are required.</h4>
        </div>
    );
}

export default Modal;

