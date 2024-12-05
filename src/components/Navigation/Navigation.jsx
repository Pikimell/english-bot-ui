import NavLink from '../custom/NavLink/NavLink';
import style from './Navigation.module.css';
import { useState } from 'react';

const Navigation = ({}) => {
  return (
    <nav className={style.navigation}>
      <NavLink to="/">Posts</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
};

export default Navigation;
