import { Toaster } from 'react-hot-toast';
import Navigation from '../Navigation/Navigation';
import style from './Layout.module.css';
import { Suspense } from 'react';
import { telegramAPI } from '../../utils/initTelegram';

const Layout = ({ children }) => {
  telegramAPI.expand();
  return (
    <div className={style.layout}>
      <Toaster />
      <div className={style.container}>
        <Suspense>{children}</Suspense>
      </div>
      <footer className={style.footer}>
        <Navigation />
      </footer>
    </div>
  );
};

export default Layout;
