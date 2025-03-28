import { useSelector } from 'react-redux';
import BlockList from '../../../components/schedule/BlockList/BlockList';
import { selectGroups } from '../../../redux/groups/selector';
import { useEffect, useState } from 'react';
import { getAllReminders } from '../../../api/reminderService';

const BlocksPage = () => {
  const [lessons, setLessons] = useState([]);
  const groupList = useSelector(selectGroups);

  useEffect(() => {
    getAllReminders().then(setLessons);
  }, []);

  const removeCallback = id => {
    setLessons(lessons.filter(el => el._id !== id));
  };
  return (
    <BlockList
      lessons={lessons || []}
      groupList={groupList || []}
      removeCallback={removeCallback}
    />
  );
};

export default BlocksPage;
