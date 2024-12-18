import { Outlet } from 'react-router-dom';
import style from './SchedulePage.module.css';
import ScheduleMenu from '../../../components/schedule/ScheduleMenu/ScheduleMenu';
import { useUpdateData } from '../../../hooks/useUpdateData';
import { useEffect } from 'react';

const SchedulePage = () => {
  const { getGroups } = useUpdateData();

  useEffect(() => {
    getGroups();
  }, [getGroups]);

  return (
    <div className={style.page + ' page'}>
      <ScheduleMenu />
      <Outlet />
    </div>
  );
};

export default SchedulePage;
