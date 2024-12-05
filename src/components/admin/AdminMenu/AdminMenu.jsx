import { useNavigate } from 'react-router-dom';
import style from './AdminMenu.module.css';
import { useState } from 'react';
const items = [
  { title: 'Пости', link: '/posts' },
  { title: 'Групи', link: '/groups' },
  { title: 'Користувачі', link: '/users' },
  { title: 'Календар', link: '/schedule' },
  { title: 'Сповіщення', link: '/notification' },
];

const AdminMenu = ({}) => {
  const navigate = useNavigate();
  const handleClick = link => {
    navigate(link);
  };
  return (
    <ul className={style.menu}>
      {items.map((el, i) => {
        return (
          <li
            key={i}
            className={style.item}
            onClick={() => handleClick(el.link)}
          >
            {el.title}
          </li>
        );
      })}
    </ul>
  );
};

export default AdminMenu;
