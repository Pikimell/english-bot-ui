import { Outlet } from 'react-router-dom';
import style from './GroupsPage.module.css';
import { useState } from 'react';
import GroupsNavigation from '../../../components/groups/GroupsNavigation/GroupsNavigation';

const GroupsPage = ({}) => {
  return (
    <div className={style.page + ' page'}>
      <GroupsNavigation />
      <Outlet />
    </div>
  );
};

export default GroupsPage;
