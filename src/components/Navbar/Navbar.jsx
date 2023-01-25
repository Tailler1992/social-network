import React from 'react';
import {NavLink} from 'react-router-dom';
import navData from '../../utils/navData';
import s from './Navbar.module.scss';

const Navbar = () => {
    return (
      <nav className={s.nav}>
        <div className={s.logo}>LOGO</div>
        <ul className={s.links}>
          {navData.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  className={({isActive}) => isActive ? `${s.activeStyle}` : undefined}
                  to={item.path}
                >
                  <div className={s.icon}>{item.icon}</div>
                  <span>{item.text}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
;

export default Navbar;
