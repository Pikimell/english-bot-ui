import clsx from 'clsx';
import { days, daysLabel } from '../../../../helpers/constants';
import style from './Item.module.css';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { getTimeZone } from '../../../../helpers/convertData';
import { removeReminder } from '../../../../api/reminderService';

const Item = ({ group, lesson, removeCallback }) => {
  const currentDay = new Date().getDay();
  const day = days[lesson.day];
  const isCurrentDay = currentDay === day;
  const time = parseInt(lesson.time) + +getTimeZone();
  const classes = clsx(style.lesson, isCurrentDay && style.active);

  const handleRemove = () => {
    const promise = removeReminder(lesson._id);

    toast
      .promise(promise, {
        loading: 'Видаляємо запис...',
        success: 'Запис було видалено!',
      })
      .then(() => removeCallback(lesson._id));
  };

  return (
    <div className={classes}>
      <div className={style.header} onClick={handleRemove}>
        <p>
          {time}:00 - {time + 1}:00
        </p>
        <p>{group.level}</p>
      </div>
      <div className={style.body}>
        {lesson.date && <p>Дата: {lesson.date.split('T')[0]}</p>}
        {lesson.day && <p>День: {daysLabel[lesson.day]}</p>}
        <p>Вартість: {group.price} грн</p>
        <p>Нотатки: {group.description || 'немає'}</p>
      </div>
    </div>
  );
};

export default Item;
