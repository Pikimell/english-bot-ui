import { Outlet } from 'react-router-dom';
import style from './NotificationPage.module.css';
import { useState } from 'react';

const NotificationPage = ({}) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NotificationPage;
