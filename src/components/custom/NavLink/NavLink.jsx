import style from './NavLink.module.css';
import { NavLink as Link } from 'react-router-dom';

const NavLink = ({ to, img, children }) => {
  return (
    <Link
      className={({ isActive }) =>
        isActive ? `${style.link} ${style.active}` : `${style.link}`
      }
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
