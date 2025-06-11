import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#modal-root');

const ModalСlarification = ({ closeModal }) => {
  return (
    <Modal>
      <p>Are you sure you want to delete the contact?</p>
      <button onClick={closeModal}>No</button>
      <button>Yes</button>
    </Modal>
  );
};

export default ModalСlarification;
