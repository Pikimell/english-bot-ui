import { Menu } from 'antd';
import style from './PostNavigation.module.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'navigation',
    label: 'Панель навігації',
    children: [
      {
        key: 'list',
        label: 'Список постів',
      },
      {
        key: 'create',
        label: 'Створення постів',
      },
      {
        key: 'drafts',
        label: 'Чорнетки постів',
      },
    ],
  },
];

const PostNavigation = () => {
  const location = useLocation();
  const activeKey = location.pathname.slice(6);

  const navigate = useNavigate();

  const handleClick = e => {
    navigate(`/posts/${e.key}`);
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

export default PostNavigation;
