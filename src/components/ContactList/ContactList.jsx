import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/contacts/selectors';
import { selectFilteredContacts } from '../../redux/filters/selectors';

const ContactList = () => {
  const error = useSelector(selectError);

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
      {error && <h2>Server is dead...</h2>}
    </div>
  );
};

export default ContactList;
