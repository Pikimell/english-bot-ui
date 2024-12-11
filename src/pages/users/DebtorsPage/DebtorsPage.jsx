import UserList from '../../../components/users/UserList/UserList';
import style from './DebtorsPage.module.css';
import { useState } from 'react';

const DebtorsPage = ({}) => {
  return (
    <div className={style.container}>
      <UserList />
    </div>
  );
};

export default DebtorsPage;
