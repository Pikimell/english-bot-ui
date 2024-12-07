import { useNavigate } from 'react-router-dom';
import style from './PostItem.module.css';
import { useState } from 'react';

const PostItem = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${item._id}`);
  };
  return (
    <div className={style.card} onClick={handleClick}>
      <div className={style.imageBox}>
        <img
          src="https://media.sproutsocial.com/uploads/2022/05/How-to-post-on-instagram-from-pc.jpg"
          alt=""
        />
      </div>
      <div className={style.footer}>
        <h4>{item.title}</h4>
        <h5>{item.topic}</h5>
      </div>
    </div>
  );
};

export default PostItem;
