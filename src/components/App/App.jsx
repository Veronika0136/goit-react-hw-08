// import React, { useEffect } from 'react';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
// import s from './App.module.css';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from '../../redux/contacts/operations';
// import { selectError, selectLoading } from '../../redux/contacts/selectors';
import Layout from '../Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage /RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

const App = () => {
  // const dispatch = useDispatch();
  // // const loading = useSelector(selectLoading);
  // // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      {/* <ContactForm />
      <SearchBox />
      {loading && !error && <b>Request in progress...</b>}
      <ContactList /> */}
    </Layout>
  );
};

export default App;
