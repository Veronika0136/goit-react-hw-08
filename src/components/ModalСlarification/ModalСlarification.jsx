import React from 'react';
import Modal from 'react-modal';
import s from './ModalСlarification.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { selectIsModalOpen, selectModalContact } from '../../redux/modal/selectors';
import { deleteContact } from '../../redux/contacts/operations';

Modal.setAppElement('#root');

const ModalСlarification = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const contact = useSelector(selectModalContact);

  const handleYes = () => {
    dispatch(deleteContact(contact?.id));
    dispatch(closeModal());
  };

  const handleNo = () => {
    dispatch(closeModal());
  };

  return (
    <Modal className={s.content} isOpen={isOpen} overlayClassName={s.overlay}>
      <p className={s.text}>Are you sure you want to delete the contact {contact?.name}?</p>
      <div className={s.btns}>
        <button className={s.btn} onClick={() => handleNo()}>
          No
        </button>
        <button className={s.btn} onClick={() => handleYes()}>
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default ModalСlarification;
