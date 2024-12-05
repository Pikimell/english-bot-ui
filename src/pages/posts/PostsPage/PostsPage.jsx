import { Outlet } from 'react-router-dom';
import PostNavigation from '../../../components/posts/PostNavigation/PostNavigation';
import style from './PostsPage.module.css';
import { useState } from 'react';

const PostsPage = ({}) => {
  return (
    <div className={style.page + ' page'}>
      <PostNavigation />
      <Outlet />
    </div>
  );
};

export default PostsPage;
