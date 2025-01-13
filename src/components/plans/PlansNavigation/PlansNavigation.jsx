import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

const items = [
  {
    key: 'navigation',
    label: 'Тарифи',
    children: [
      {
        key: 'list',
        label: 'Список тарифів',
      },
      {
        key: 'create',
        label: 'Створити тариф',
      },
    ],
  },
];
const PlansNavigation = () => {
  const navigate = useNavigate();

  const handleClick = e => {
    navigate(`/plan/${e.key}`);
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

export default PlansNavigation;
