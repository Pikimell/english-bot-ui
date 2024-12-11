import { useSelector } from 'react-redux';
import Calendar from '../../../components/schedule/Calendar/Calendar';
import style from './CalendarPage.module.css';
import { selectSchedule } from '../../../redux/lessons/selector';

const CalendarPage = () => {
  const schedule = useSelector(selectSchedule);
  return (
    <div>
      <Calendar data={schedule} />
    </div>
  );
};

export default CalendarPage;
