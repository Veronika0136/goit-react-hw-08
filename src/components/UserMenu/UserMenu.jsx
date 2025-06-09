import React from 'react';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dicpatch = useDispatch();

  const handleLogout = () => {
    dicpatch(logout());
  };

  return (
    <div className={s.menu}>
      <p className={s.text}>Welcome, {user.user.name}</p>
      <button className={s.btn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
