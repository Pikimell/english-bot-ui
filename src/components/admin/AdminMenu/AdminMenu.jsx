import { useNavigate } from 'react-router-dom';
import style from './AdminMenu.module.css';
import { useState } from 'react';
const items = [
  { title: 'Пости', link: '/posts/list' },
  { title: 'Групи', link: '/groups/list' },
  { title: 'Користувачі', link: '/users/list' },
  { title: 'Календар', link: '/schedule/calendar' },
  { title: 'Сповіщення', link: '/notification/homework' },
  { title: 'Статистика', link: '/statistics' },
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
