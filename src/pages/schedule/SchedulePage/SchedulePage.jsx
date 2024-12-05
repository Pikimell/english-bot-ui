import { Outlet } from 'react-router-dom';
import style from './SchedulePage.module.css';
import { useState } from 'react';

const SchedulePage = ({}) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SchedulePage;
