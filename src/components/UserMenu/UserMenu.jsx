import React from 'react';
import s from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  console.log(user.user);

  return (
    <div className={s.menu}>
      <p className={s.text}>Welcome, {user.user.name}</p>
      <button className={s.btn}>Logout</button>
    </div>
  );
};

export default UserMenu;
