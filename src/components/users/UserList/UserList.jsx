import { List } from 'antd';
import style from './UserList.module.css';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../api/userService';
import UserItem from './UserItem/UserItem';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../../redux/users/selector';
import { selectLoading } from '../../../redux/main/selector';

const UserList = () => {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);

  return (
    <List
      className={style.list}
      dataSource={users}
      loading={loading}
      bordered
      header="Список користувачів"
      renderItem={item => {
        return (
          <List.Item>
            <UserItem item={item} />
          </List.Item>
        );
      }}
    />
  );
};

export default UserList;
