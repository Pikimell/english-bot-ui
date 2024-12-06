import { useDispatch, useSelector } from 'react-redux';
import style from './DraftsPage.module.css';
import { useEffect, useState } from 'react';
import { selectPosts } from '../../../redux/posts/selector';
import { getAllPosts } from '../../../api/postService';
import { setPosts } from '../../../redux/posts/slice';
import AdminPostList from '../../../components/posts/AdminPostList/AdminPostList';
import Loading from '../../../components/custom/Loading/Loading';

const DraftsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts({ isPosted: false })
      .then(data => {
        dispatch(setPosts(data));
      })
      .then(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) return <Loading />;
  return (
    <div className={style.container}>
      <AdminPostList posts={posts} />
    </div>
  );
};

export default DraftsPage;
