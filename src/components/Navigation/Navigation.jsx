import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
