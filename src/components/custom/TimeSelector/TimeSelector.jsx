import { Select } from 'antd';
import style from './TimeSelector.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectSchedule } from '../../../redux/lessons/selector';
import { parseTime } from '../../../helpers/convertData';

const getBlockedTime = (schedule = {}, day) => {
  if (!day) return [];
  const arr = schedule[day] || [];
  return arr.map(el => +el.split(':')[0]);
};
const generateTimeOptions = blockedTime => {
  const arr = [];
  for (let i = 5; i <= 21; i++) {
    const time = i.toString().padStart(2, '0');
    arr.push({
      value: `${time}:00`,
      label: `${parseTime(time)}:00`,
      disabled: blockedTime.includes(+time),
    });
  }
  return arr;
};

const TimeSelector = ({ day, className, ...props }) => {
  const classes = clsx(style.selector, className);
  const schedule = useSelector(selectSchedule);
  const blockedTime = getBlockedTime(schedule, day);
  const options = generateTimeOptions(blockedTime);

  return (
    <Select
      options={options}
      className={classes}
      placeholder="Оберіть час"
      {...props}
    ></Select>
  );
};

export default TimeSelector;
