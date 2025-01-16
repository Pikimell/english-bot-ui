import { Outlet } from 'react-router-dom';
import style from './NotificationPage.module.css';
import { Flex } from 'antd';
import BackButton from '../../../components/custom/BackButton/BackButton';
import NotificationMenu from '../../../components/notification/NotificationMenu/NotificationMenu';

const NotificationPage = () => {
  return (
    <div className={style.page + ' page'}>
      <Flex gap="5px" align="center">
        <BackButton />
        <NotificationMenu />
      </Flex>
      <Outlet />
    </div>
  );
};

export default NotificationPage;
