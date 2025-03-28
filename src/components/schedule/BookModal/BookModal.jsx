import { Button, DatePicker } from 'antd';
import DaySelector from '../../custom/DaySelector/DaySelector';
import GroupSelector from '../../custom/GroupSelector/GroupSelector';
import TimeSelector from '../../custom/TimeSelector/TimeSelector';
import style from './BookModal.module.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const BookModal = ({ close }) => {
  const [group, setGroup] = useState();
  const [date, setDate] = useState();
  const [day, setDay] = useState();
  const [time, setTime] = useState();
  const startDate = new Date();

  useEffect(() => {
    if (date) {
      const userDate = new Date(date);
      setDay(userDate.getDay());
    }
  }, [date]);

  const handleClose = e => {
    if (e.target === e.currentTarget) close();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!group || !(day >= 0) || !time) {
      return;
    }

    console.log(group, day, time);
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
