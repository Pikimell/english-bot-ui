import { Button, Table } from 'antd';
import style from './GroupList.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getColumns = onOpen => {
  return [
    {
      title: 'Рівень',
      dataIndex: 'level',
      key: 'level',
      sorter: (a, b) => a.level.localeCompare(b.level),
    },
    {
      title: 'Вартість',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Учнів',
      dataIndex: 'students',
      key: 'students',
      sorter: (a, b) => a.students - b.students,
    },
    {
      title: 'Перегляд',
      dataIndex: '_id',
      render: id => <Button onClick={() => onOpen(id)}>Відкрити</Button>,
    },
  ];
};

const GroupList = ({ groups }) => {
  const navigate = useNavigate();
  const onOpen = id => {
    navigate(`/groups/${id}`);
  };

  const columns = getColumns(onOpen);
  return <Table dataSource={groups} columns={columns} />;
};

export default GroupList;
