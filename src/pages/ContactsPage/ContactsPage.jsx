import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoading, selectEditContact } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import UpdateContact from '../../components/UpdateContact/UpdateContact';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const editContact = useSelector(selectEditContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {editContact ? (
        <UpdateContact />
      ) : (
        <div>
          <ContactForm />
          {loading && !error && <b>Request in progress...</b>}
          <SearchBox />
          <ContactList />
        </div>
      )}
    </>
  );
};

export default ContactsPage;
