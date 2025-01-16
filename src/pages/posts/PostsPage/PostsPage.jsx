import { Outlet } from 'react-router-dom';
import PostNavigation from '../../../components/posts/PostNavigation/PostNavigation';
import style from './PostsPage.module.css';
import { useState } from 'react';
import BackButton from '../../../components/custom/BackButton/BackButton';
import { Flex } from 'antd';

const PostsPage = ({}) => {
  return (
    <div className={style.page + ' page'}>
      <Flex gap="5px" align="center">
        <BackButton />
        <PostNavigation />
      </Flex>
      <Outlet />
    </div>
  );
};

export default PostsPage;
