import UserList from '../../../components/users/UserList/UserList';
import style from './ListPage.module.css';
import { useState } from 'react';

const ListPage = ({}) => {
  return (
    <div className={style.container}>
      <UserList />
    </div>
  );
};

export default ListPage;
