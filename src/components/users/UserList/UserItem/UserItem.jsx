import { useNavigate } from 'react-router-dom';
import style from './UserItem.module.css';
import { useState } from 'react';

const UserItem = ({ item }) => {
  const { contactInfo } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/edit?userId=${item.userId}`);
  };

  return (
    <div className={style.item} onClick={handleClick}>
      <div className={style.fullname}>{contactInfo.first_name}</div>
      <div className={style.level}>{item.level || '--'}</div>
      <div className={style.balance}>{item.balance}</div>
    </div>
  );
};

export default UserItem;
