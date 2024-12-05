import { Outlet } from 'react-router-dom';
import style from './GroupsPage.module.css';
import { useState } from 'react';

const GroupsPage = ({}) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default GroupsPage;
