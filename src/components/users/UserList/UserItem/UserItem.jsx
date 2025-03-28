import { useNavigate } from 'react-router-dom';
import style from './UserItem.module.css';
import { useState } from 'react';
import { Flex } from 'antd';
import { deleteUser } from '../../../../api/userService';
import toast from 'react-hot-toast';

const UserItem = ({ item }) => {
  const { contactInfo } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/edit?userId=${item.userId}`);
  };

  const handleRemove = () => {
    deleteUser(item.userId).then(() => {
      toast.success('Користувача було видалено!');
    });
  };
  return (
    <Flex>
      <div className={style.item} onClick={handleClick}>
        <div className={style.fullname}>{contactInfo.first_name}</div>
        <div className={style.level}>{item.level || '--'}</div>
        <div className={style.balance}>{item.balance}</div>
      </div>

      <div className={style['remove-btn']} onClick={handleRemove}>
        x
      </div>
    </Flex>
  );
};

export default UserItem;
