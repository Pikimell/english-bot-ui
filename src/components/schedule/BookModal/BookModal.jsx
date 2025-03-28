import { Button, DatePicker } from 'antd';
import DaySelector from '../../custom/DaySelector/DaySelector';
import GroupSelector from '../../custom/GroupSelector/GroupSelector';
import TimeSelector from '../../custom/TimeSelector/TimeSelector';
import style from './BookModal.module.css';
import { useState } from 'react';
import dayjs from 'dayjs';
import { addReminder } from '../../../api/reminderService';
import toast from 'react-hot-toast';

const BookModal = ({ close }) => {
  const [group, setGroup] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const startDate = new Date();

  const handleClose = e => {
    if (e.target === e.currentTarget) close();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!group || !date || !time) {
      return;
    }

    const promise = addReminder({ groupId: group, date, time });
    toast
      .promise(promise, {
        loading: 'Зберігаємо данні...',
        success: 'Запис додано!',
      })
      .then(close);
  };

  return (
    <div className={style.backdrop} onClick={handleClose}>
      <div className={style.modal}>
        <form className={style.form} onSubmit={handleSubmit}>
          <GroupSelector required onChange={setGroup} />
          <DatePicker
            minDate={dayjs(startDate)}
            inputReadOnly
            onChange={(_, value) => setDate(value)}
            required
          />
          <TimeSelector required onChange={setTime} />
          <Button onClick={handleSubmit}>Записати</Button>
        </form>
      </div>
    </div>
  );
};

export default BookModal;
