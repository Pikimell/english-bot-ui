import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'navigation',
    label: 'Розклад заннятть',
    children: [
      {
        key: 'block',
        label: 'У вигляді блоків',
      },
      {
        key: 'calendar',
        label: 'У вигляді календаря',
      },
      {
        key: 'list',
        label: 'У вигляді списку',
      },
      {
        key: 'visit-log',
        label: 'Журнал відвідуваннь',
      },
      {
        key: 'absentee-log',
        label: 'Відмітити відсутніх',
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
