import { useSelector } from 'react-redux';
import style from './VisitPage.module.css';
import { useEffect, useMemo, useState } from 'react';
import { selectLessons } from '../../../redux/lessons/selector';
import LessonList from '../../../components/schedule/LessonList/LessonList';
import { selectUsers } from '../../../redux/users/selector';
import { selectGroups } from '../../../redux/groups/selector';
import { date2str, time2str } from '../../../helpers/convertData';

const VisitPage = () => {
  const lessonList = useSelector(selectLessons);
  const users = useSelector(selectUsers);
  const groups = useSelector(selectGroups);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const result = lessonList.map(lesson => {
      const user = users.find(user => user.userId === lesson.userId);
      const group = users.find(group => group._id === lesson.groupId);
      const date = new Date(lesson.dateTime);
      return {
        ...lesson,
        user,
        group,
        userName: user?.contactInfo?.first_name,
        date: date2str(date),
        time: time2str(date),
      };
    });
    setLessons(result);
  }, [lessonList, users, groups]);
  return <LessonList lessons={lessons} />;
};

export default VisitPage;
