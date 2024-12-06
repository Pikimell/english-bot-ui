import { getAllPosts } from '../../../api/postService';
import style from './ListPage.module.css';
import { useEffect, useState } from 'react';
import AdminPostList from '../../../components/posts/AdminPostList/AdminPostList';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../../../redux/posts/selector';
import { setPosts } from '../../../redux/posts/slice';
import Loading from '../../../components/custom/Loading/Loading';

const ListPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(data => {
        dispatch(setPosts(data));
      })
      .then(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <div className={style.container}>
      <div></div>
      <AdminPostList posts={posts} />
    </div>
  );
};

export default ListPage;
