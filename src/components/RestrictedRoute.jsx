import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return isLoggedin ? <Navigate to="/contacts" /> : component;
};

export default RestrictedRoute;
