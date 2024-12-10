import { Outlet } from 'react-router-dom';
import style from './UsersPage.module.css';
import { useState } from 'react';
import UsersNavigation from '../../../components/users/UsersNavigation/UsersNavigation';

const UsersPage = ({}) => {
  return (
    <div className={style.page + ' page'}>
      <UsersNavigation />
      <Outlet />
    </div>
  );
};

export default UsersPage;
