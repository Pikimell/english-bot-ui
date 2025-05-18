import { Menu } from 'antd';
import style from './UsersNavigation.module.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'navigation',
    label: 'Панель навігації',
    children: [
      {
        key: 'list',
        label: 'Список користувачів',
      },
      // {
      //   key: 'debtors',
      //   label: 'Список боржників',
      // },
      {
        key: 'edit',
        label: 'Змінити користувача',
      },
      // {
      //   key: 'search',
      //   label: 'Пошук користувача',
      // },
    ],
  },
];

const UsersNavigation = () => {
  const location = useLocation();
  const activeKey = location.pathname.slice(6);

  const navigate = useNavigate();

  const handleClick = e => {
    navigate(`/users/${e.key}`);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{
        width: 256,
      }}
      activeKey={activeKey}
      mode="inline"
      items={items}
    />
  );
};

export default UsersNavigation;
