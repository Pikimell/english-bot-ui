import { useSelector } from 'react-redux';
import style from './VisitPage.module.css';
import { useMemo, useState } from 'react';
import { selectGroups } from '../../../redux/groups/selector';
import { days } from '../../../helpers/constants';
import VisitUsers from '../../../components/schedule/VisitUsers/VisitUsers';
const dayList = Object.keys(days);

const VisitPage = () => {
  const groups = useSelector(selectGroups);
  const filterGroups = useMemo(() => {
    return groups.filter(group => {
      const days = group.schedule.map(l => l.day);
      const currentDayIndex = new Date().getDay();
      const currentDay = dayList[currentDayIndex];
      return days.includes(currentDay);
    });
  }, [groups]);

  return <VisitUsers groups={filterGroups} />;
};

export default VisitPage;
