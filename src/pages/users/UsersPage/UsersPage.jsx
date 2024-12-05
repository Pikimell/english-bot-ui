import { Outlet } from 'react-router-dom';
import style from './UsersPage.module.css';
import { useState } from 'react';

const UsersPage = ({}) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UsersPage;
