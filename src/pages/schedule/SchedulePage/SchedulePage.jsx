import { Outlet } from 'react-router-dom';
import style from './SchedulePage.module.css';
import ScheduleMenu from '../../../components/schedule/ScheduleMenu/ScheduleMenu';
import { useUpdateData } from '../../../hooks/useUpdateData';
import { useEffect } from 'react';
import BackButton from '../../../components/custom/BackButton/BackButton';
import { Flex } from 'antd';

const SchedulePage = () => {
  const { getGroups } = useUpdateData();

  useEffect(() => {
    getGroups();
  }, [getGroups]);

  return (
    <div className={style.page + ' page'}>
      <Flex gap="5px" align="center">
        <BackButton />
        <ScheduleMenu />
      </Flex>
      <Outlet />
    </div>
  );
};

export default SchedulePage;
