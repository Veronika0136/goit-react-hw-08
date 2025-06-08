import React from 'react';
import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={s.menu}>
      <p className={s.text}>Welcome, userName</p>
      <button className={s.btn}>Logout</button>
    </div>
  );
};

export default UserMenu;
