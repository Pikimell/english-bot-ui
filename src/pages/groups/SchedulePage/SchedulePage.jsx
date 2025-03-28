import { useParams } from 'react-router-dom';
import style from './SchedulePage.module.css';
import { useEffect, useMemo, useState } from 'react';
import {
  getGroupById,
  updateGroupScheduleById,
} from '../../../api/groupService';
import { Button, Flex, List } from 'antd';
import DaySelector from '../../../components/custom/DaySelector/DaySelector';
import TimeSelector from '../../../components/custom/TimeSelector/TimeSelector';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { updateGroup } from '../../../redux/groups/slice';
import { days, daysLabel } from '../../../helpers/constants';
import { parseTime } from '../../../helpers/convertData';
import { addSchedule, removeSchedule } from '../../../redux/lessons/slice';
import {
  addReminder,
  getAllReminders,
  removeReminder,
} from '../../../api/reminderService';

const SchedulePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [schedule, setSchedule] = useState([]);

  const [day, setDay] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    if (!id) return;
    getAllReminders({ groupId: id }).then(setSchedule);
  }, [id]);

  const handleChangeDay = key => {
    setDay(key);
  };

  const handleChangeTime = key => {
    setTime(key);
  };

  const handleRemoveSchedule = id => {
    const promise = removeReminder(id);
    toast
      .promise(promise, {
        loading: 'Видаляємо з розкладу...',
        success: 'Успішно видалено!',
        error: 'Упс! Щось пішло не так(',
      })
      .then(() => {
        const copy = schedule.filter(el => el._id !== id);
        setSchedule(copy);
      });
    dispatch(removeSchedule(id));
  };

  const handleAddSchedule = () => {
    if (!day || !time) {
      toast.error('Треба заповнити усі поля');
      return;
    }

    const promise = addReminder({ groupId: id, day, time });
    toast
      .promise(promise, {
        loading: 'Додаємо у розклад...',
        success: 'Успішно додано!',
        error: 'Щось пішло не так(',
      })
      .then(data => {
        const copy = [...schedule, data].toSorted((a, b) => {
          const day1 = days[a.day] || 0;
          const day2 = days[b.day] || 0;
          if (day1 !== day2) return day1 - day2;

          const time1 = parseInt(a.time.replace(':', ''));
          const time2 = parseInt(b.time.replace(':', ''));
          return time1 - time2;
        });
        setSchedule(copy);
      });
    dispatch(addSchedule({ day, time }));
    setTime();
    setDay();
  };

  const filteredSchedule = useMemo(() => {
    return schedule.filter(a => a.day);
  }, [schedule]);

  return (
    <div className={style.container}>
      <List
        header="Розклад заннятть"
        dataSource={filteredSchedule}
        bordered
        renderItem={el => {
          return (
            <List.Item className={style.item}>
              <Flex
                style={{ width: '100%' }}
                gap="20px"
                justify="space-between"
              >
                <div>{daysLabel[el.day]}</div>
                <div>{parseTime(el.time)}:00</div>
                <Button onClick={() => handleRemoveSchedule(el._id)}>
                  Видалити
                </Button>
              </Flex>
            </List.Item>
          );
        }}
      />
      <div className={style.form}>
        <DaySelector onChange={handleChangeDay} value={day} />
        <TimeSelector
          day={day}
          value={time}
          onChange={handleChangeTime}
          disabled={Boolean(!day)}
        />
      </div>
      <Button onClick={handleAddSchedule}>Додати у розклад</Button>
    </div>
  );
};

export default SchedulePage;
