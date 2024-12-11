import { useSelector } from 'react-redux';
import ItemList from '../../../components/schedule/ItemList/ItemList';
import style from './ScheduleListPage.module.css';
import { useState } from 'react';
import { selectSchedule } from '../../../redux/lessons/selector';

const ScheduleListPage = ({}) => {
  const schedule = useSelector(selectSchedule);
  return (
    <div>
      <ItemList data={schedule} />
    </div>
  );
};

export default ScheduleListPage;
