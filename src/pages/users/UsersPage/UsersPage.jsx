import { Outlet } from 'react-router-dom';
import style from './UsersPage.module.css';
import { useState } from 'react';
import UsersNavigation from '../../../components/users/UsersNavigation/UsersNavigation';
import BackButton from '../../../components/custom/BackButton/BackButton';
import { Flex } from 'antd';

const UsersPage = ({}) => {
  return (
    <div className={style.page + ' page'}>
      <Flex gap="5px">
        <BackButton />
        <UsersNavigation />
      </Flex>
      <Outlet />
    </div>
  );
};

export default UsersPage;
