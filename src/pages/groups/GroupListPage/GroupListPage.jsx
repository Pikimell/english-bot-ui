import { useDispatch, useSelector } from 'react-redux';
import style from './GroupListPage.module.css';
import { useEffect, useState } from 'react';
import { getAllGroups } from '../../../api/groupService';
import Loading from '../../../components/custom/Loading/Loading';
import GroupList from '../../../components/groups/GroupList/GroupList';
import { selectGroups } from '../../../redux/groups/selector';
import { setGroups } from '../../../redux/groups/slice';

const GroupListPage = () => {
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllGroups()
      .then(data => {
        dispatch(setGroups(data));
      })
      .then(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) return <Loading />;
  return (
    <div className={style.container}>
      <GroupList groups={groups} />
    </div>
  );
};

export default GroupListPage;
