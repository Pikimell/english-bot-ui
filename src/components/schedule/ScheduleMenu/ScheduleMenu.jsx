import { Menu } from 'antd';
import style from './ScheduleMenu.module.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'navigation',
    label: 'Розклад заннятть',
    children: [
      {
        key: 'list',
        label: 'У вигляді списку',
      },
      {
        key: 'calendar',
        label: 'У вигляді календаря',
      },
      {
        key: 'block',
        label: 'У вигляді блоків',
      },
    ],
  },
];

const ScheduleMenu = () => {
  const navigate = useNavigate();

  const handleClick = e => {
    navigate(`/schedule/${e.key}`);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{
        width: 256,
      }}
      mode="inline"
      items={items}
    />
  );
};

export default ScheduleMenu;
