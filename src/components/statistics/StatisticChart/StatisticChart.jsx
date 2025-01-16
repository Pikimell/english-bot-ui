import { Tabs } from 'antd';
import style from './StatisticChart.module.css';
import { useState } from 'react';
import Payments from '../Payments/Payments';
import Lessons from '../Lessons/Lessons';
import OtherInfo from '../OtherInfo/OtherInfo';

const items = [
  {
    key: '1',
    label: 'Дохід',
    children: <Payments />,
  },
  {
    key: '2',
    label: 'Уроки',
    children: <Lessons />,
  },
  {
    key: '3',
    label: 'Інше',
    children: <OtherInfo />,
  },
];

const StatisticChart = () => {
  return (
    <div className={style.container}>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default StatisticChart;
