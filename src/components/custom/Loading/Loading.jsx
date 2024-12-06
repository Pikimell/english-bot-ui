import { Spin } from 'antd';
import style from './Loading.module.css';
import { useState } from 'react';

const Loading = ({}) => {
  return (
    <div className={style.loading}>
      <Spin size="large" fullscreen={true} className={style.spinner} />
    </div>
  );
};

export default Loading;
