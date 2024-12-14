import { useSelector } from 'react-redux';
import BlockList from '../../../components/schedule/BlockList/BlockList';
import style from './BlocksPage.module.css';
import { selectGroups } from '../../../redux/groups/selector';

const BlocksPage = () => {
  const groupList = useSelector(selectGroups);
  return <BlockList groupList={groupList} />;
};

export default BlocksPage;
