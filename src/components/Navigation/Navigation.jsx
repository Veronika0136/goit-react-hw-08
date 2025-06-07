import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={s.link}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
