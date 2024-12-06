import { Spin } from 'antd';
import style from './Loading.module.css';
import { useState } from 'react';

const Loading = ({ fullscreen = false }) => {
  return (
    <div className={style.loading}>
      <Spin size="large" fullscreen={fullscreen} className={style.spinner} />
    </div>
  );
};

export default Loading;
