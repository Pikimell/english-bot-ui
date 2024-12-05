import NavLink from '../custom/NavLink/NavLink';
import style from './Navigation.module.css';
import { useState } from 'react';

const Navigation = ({}) => {
  return (
    <nav className={style.navigation}>
      <NavLink to="/">Пости</NavLink>
      <NavLink to="/search">Пошук</NavLink>
      <NavLink to="/categories">Категорії</NavLink>
      <NavLink to="/admin">Адмін</NavLink>
    </nav>
  );
};

export default Navigation;
