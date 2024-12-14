import { Outlet } from 'react-router-dom';
import style from './SchedulePage.module.css';
import ScheduleMenu from '../../../components/schedule/ScheduleMenu/ScheduleMenu';

const SchedulePage = () => {
  return (
    <div className={style.page + ' page'}>
      <ScheduleMenu />
      <Outlet />
    </div>
  );
};

export default SchedulePage;
