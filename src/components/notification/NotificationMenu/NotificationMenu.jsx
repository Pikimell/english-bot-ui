import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

const items = [
  {
    key: 'navigation',
    label: 'Сповіщення',
    children: [
      {
        key: 'spam',
        label: 'Надіслати усім',
      },
      {
        key: 'homework',
        label: 'Надіслати групі',
      },
      {
        key: 'alert',
        label: 'Надіслати користувачу',
      },
    ],
  },
];
const NotificationMenu = ({}) => {
  const navigate = useNavigate();

  const handleClick = e => {
    navigate(`/notification/${e.key}`);
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

export default NotificationMenu;
