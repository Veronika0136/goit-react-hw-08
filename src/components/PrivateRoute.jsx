import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return isLoggedin ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
