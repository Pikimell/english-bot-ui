import { useSelector } from 'react-redux';
import style from './AbsenteePage.module.css';
import { useMemo, useState } from 'react';
import { days } from '../../../helpers/constants';
import { selectGroups } from '../../../redux/groups/selector';
import VisitUsers from '../../../components/schedule/VisitUsers/VisitUsers';
const dayList = Object.keys(days);

const AbsenteePage = () => {
  const groups = useSelector(selectGroups);
  const filterGroups = useMemo(() => {
    return [];
    // return groups.filter(group => {
    //   const days = group.schedule.map(l => l.day);
    //   const currentDayIndex = new Date().getDay();
    //   const currentDay = dayList[currentDayIndex];
    //   return days.includes(currentDay);
    // });
  }, [groups]);

  return <VisitUsers groups={filterGroups} />;
};

export default AbsenteePage;
