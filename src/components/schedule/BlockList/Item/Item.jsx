import clsx from 'clsx';
import { days, daysLabel } from '../../../../helpers/constants';
import style from './Item.module.css';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Item = ({ group, lesson }) => {
  const currentDay = new Date().getDay();
  const day = days[lesson.day];
  const isCurrentDay = currentDay === day;
  const time = parseInt(lesson.time);
  const classes = clsx(style.lesson, isCurrentDay && style.active);

  const handleCalendar = () => {
    // createEvent(lesson);
    toast.success('Додано до календаря!');
  };

  return (
    <div className={classes}>
      <div className={style.header} onClick={handleCalendar}>
        <p>
          {time}:00 - {time + 1}:00
        </p>
        <p>{group.level}</p>
      </div>
      <div className={style.body}>
        <p>День: {daysLabel[lesson.day]}</p>
        <p>Вартість: {group.price} грн</p>
        <p>Нотатки: {group.description || 'немає'}</p>
      </div>
    </div>
  );
};

export default Item;
