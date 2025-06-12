import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import ModalСlarification from '../ModalСlarification/ModalСlarification';

const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={s.flex}>
        {filterContacts.map(({ name, number, id }) => (
          <li key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
      <ModalСlarification />
    </div>
  );
};

export default ContactList;
