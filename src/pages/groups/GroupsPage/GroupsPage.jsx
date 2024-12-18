import { Outlet } from 'react-router-dom';
import style from './GroupsPage.module.css';
import GroupsNavigation from '../../../components/groups/GroupsNavigation/GroupsNavigation';
import { Flex } from 'antd';
import BackButton from '../../../components/custom/BackButton/BackButton';

const GroupsPage = ({}) => {
  return (
    <div className={style.page + ' page'}>
      <Flex gap="5px">
        <BackButton />
        <GroupsNavigation />
      </Flex>

      <Outlet />
    </div>
  );
};

export default GroupsPage;
