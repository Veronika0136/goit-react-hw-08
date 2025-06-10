import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage /RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user ...</strong>
  ) : (
    <Suspense allback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
