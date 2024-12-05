import Navigation from '../Navigation/Navigation';
import style from './Layout.module.css';
import { useState } from 'react';

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <div className={style.container}>{children}</div>
      <footer className={style.footer}>
        <Navigation />
      </footer>
    </div>
  );
};

export default Layout;
