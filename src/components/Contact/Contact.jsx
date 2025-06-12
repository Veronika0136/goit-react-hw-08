import React from 'react';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice';
import { MdDelete } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';
import { setEditContact } from '../../redux/contacts/slice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(openModal({ id, name }));
  };

  const handleEdit = () => {
    dispatch(setEditContact({ id, name, number }));
  };

  return (
    <div className={s.card}>
      <div className={s.info}>
        <div className={s.contact}>
          <svg className={s.icon} width={20} height={20}>
            <use href="/icons.svg#icon-user"></use>
          </svg>
          <p>{name}</p>
        </div>
        <div className={s.contact}>
          <svg className={s.icon} width={20} height={20}>
            <use href="/icons.svg#icon-phone"></use>
          </svg>
          <p>{number}</p>
        </div>
      </div>
      <div className={s.box_btns}>
        <button className={s.btn} onClick={() => handleModal()}>
          <MdDelete className={s.icon} />
        </button>
        <button className={s.btn} onClick={() => handleEdit()}>
          <FaUserEdit className={s.icon} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
