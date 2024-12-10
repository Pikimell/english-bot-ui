import { useSelector } from 'react-redux';
import style from './GroupListPage.module.css';
import Loading from '../../../components/custom/Loading/Loading';
import GroupList from '../../../components/groups/GroupList/GroupList';
import { selectGroups } from '../../../redux/groups/selector';
import { selectLoading } from '../../../redux/main/selector';

const GroupListPage = () => {
  const groups = useSelector(selectGroups);
  const isLoading = useSelector(selectLoading);

  if (isLoading) return <Loading />;
  return (
    <div className={style.container}>
      <GroupList groups={groups} />
    </div>
  );
};

export default GroupListPage;
