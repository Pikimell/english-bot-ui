import { Menu } from 'antd';
import style from './PostNavigation.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const PostNavigation = ({}) => {
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
      defaultSelectedKeys={['/list']}
      mode="inline"
      items={items}
    />
  );
};

export default PostNavigation;
