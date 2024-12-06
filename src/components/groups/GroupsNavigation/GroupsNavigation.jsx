import { Menu } from 'antd';
import style from './GroupsNavigation.module.css';

import { useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'navigation',
    label: 'Панель навігації',
    children: [
      {
        key: 'list',
        label: 'Список груп',
      },
      {
        key: 'create',
        label: 'Створити групу',
      },
    ],
  },
];

const GroupsNavigation = () => {
  const navigate = useNavigate();

  const handleClick = e => {
    navigate(`/groups/${e.key}`);
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

export default GroupsNavigation;
