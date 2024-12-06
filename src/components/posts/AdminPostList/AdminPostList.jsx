import { List } from 'antd';
import style from './AdminPostList.module.css';
import PostItem from './PostItem/PostItem';

const AdminPostList = ({ posts }) => {
  return (
    <List
      className={style.list}
      dataSource={posts}
      renderItem={item => (
        <List.Item>
          <PostItem item={item} />
        </List.Item>
      )}
    />
  );
};

export default AdminPostList;
