import { getAllPosts } from '../../../api/postService';
import style from './ListPage.module.css';
import { useEffect } from 'react';
import AdminPostList from '../../../components/posts/AdminPostList/AdminPostList';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../../../redux/posts/selector';
import { setPosts } from '../../../redux/posts/slice';

const ListPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    getAllPosts().then(data => {
      dispatch(setPosts(data));
    });
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div></div>
      <AdminPostList posts={posts} />
    </div>
  );
};

export default ListPage;
