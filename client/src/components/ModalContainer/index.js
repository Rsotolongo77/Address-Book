import React, { useState } from 'react';

const ModalContainer = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const closeModal = () => {
        if (e.target.id === 'modal') {
            toggleModal()
        }
    }
    return (
        <div>
            <Modal
                toggleModal={toggleModal}
                closeModal={closeModal}
            />
        </div>
    );
}

export default ModalContainer;