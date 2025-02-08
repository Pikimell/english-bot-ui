import { useParams } from 'react-router-dom';
import style from './SchedulePage.module.css';
import { useEffect, useState } from 'react';
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
import { v4 as getId } from 'uuid';
import { parseTime } from '../../../helpers/convertData';
import { addSchedule, removeSchedule } from '../../../redux/lessons/slice';

const SchedulePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [group, setGroup] = useState({});
  const schedule = group.schedule || [];

  const [day, setDay] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    if (!id) return;
    getGroupById(id).then(setGroup);
  }, [id]);

  const handleChangeDay = key => {
    setDay(key);
  };

  const handleChangeTime = key => {
    setTime(key);
  };

  const handleRemoveSchedule = (day, time) => {
    const newSchedule = schedule.filter(el => {
      return el.day !== day || el.time !== time;
    });

    const updatedGroup = { ...group, schedule: newSchedule };
    const promise = updateGroupScheduleById(id, updatedGroup);
    toast
      .promise(promise, {
        loading: 'Видаляємо з розкладу...',
        success: 'Успішно видалено!',
        error: 'Упс! Щось пішло не так(',
      })
      .then(() => {
        dispatch(updateGroup({ _id: id, data: updatedGroup }));
        setGroup(updatedGroup);
      });
    dispatch(removeSchedule({ day, time }));
  };

  const handleAddSchedule = () => {
    if (!day || !time) {
      toast.error('Треба заповнити усі поля');
      return;
    }

    const newSchedule = [...schedule, { day, time, id: getId() }]
      .sort((a, b) => {
        return parseInt(a.time) - parseInt(b.time);
      })
      .sort((a, b) => {
        return days[a.day] - days[b.day];
      });

    const updatedGroup = { ...group, schedule: newSchedule };
    const promise = updateGroupScheduleById(id, updatedGroup);
    toast
      .promise(promise, {
        loading: 'Додаємо у розклад...',
        success: 'Успішно додано!',
        error: 'Щось пішло не так(',
      })
      .then(() => {
        dispatch(updateGroup({ _id: id, data: updatedGroup }));
        setGroup(updatedGroup);
      });
    dispatch(addSchedule({ day, time }));
    setTime();
    setDay();
  };
  return (
    <div className={style.container}>
      <List
        header="Розклад заннятть"
        dataSource={schedule}
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
                <Button onClick={() => handleRemoveSchedule(el.day, el.time)}>
                  Видалити
                </Button>
              </Flex>
            </List.Item>
          );
        }}
      />
      <div className={style.form}>
        <DaySelector onChange={handleChangeDay} />
        <TimeSelector
          day={day}
          onChange={handleChangeTime}
          disabled={Boolean(!day)}
        />
      </div>
      <Button onClick={handleAddSchedule}>Додати у розклад</Button>
    </div>
  );
};

export default SchedulePage;
