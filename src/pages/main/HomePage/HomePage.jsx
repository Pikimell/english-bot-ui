import { useDispatch, useSelector } from 'react-redux';
import style from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { selectPosts } from '../../../redux/posts/selector';
import { getAllPosts } from '../../../api/postService';
import { setPosts } from '../../../redux/posts/slice';
import Loading from '../../../components/custom/Loading/Loading';
import PostItem from '../../../components/custom/PostItem/PostItem';
import { Empty } from 'antd';

const HomePage = ({}) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts({ isPosted: true })
      .then(data => {
        dispatch(setPosts(data));
      })
      .then(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <div className={style.page + ' page'}>
      <ul className={style.list}>
        {posts.map(item => {
          return <PostItem item={item} key={item._id} />;
        })}
      </ul>

      {posts.length === 0 && (
        <Empty description="На жаль покищо постів немає!" />
      )}
    </div>
  );
};

export default HomePage;
