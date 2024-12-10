import { isAdmin } from '../../utils/initTelegram';
import NavLink from '../custom/NavLink/NavLink';
import style from './Navigation.module.css';
import { useState } from 'react';

const Navigation = ({}) => {
  const hasAccess = isAdmin();
  return (
    <nav className={style.navigation}>
      <NavLink to="/">Пости</NavLink>
      {/* <NavLink to="/search">Пошук</NavLink> */}
      {/* <NavLink to="/categories">Категорії</NavLink> */}
      {hasAccess && <NavLink to="/admin">Адмін</NavLink>}
    </nav>
  );
};

export default Navigation;
