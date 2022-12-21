import React from "react";

import s from "./Navbar.module.scss";

import home from "../../assets/img/home.svg";
import music from "../../assets/img/music.svg";
import news from "../../assets/img/news.svg";
import message from "../../assets/img/message.svg";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={s.nav}>
        <div className={s.logo}>LOGO</div>
        <ul className={s.links}>
          <li>
            <NavLink
                className={({isActive}) => isActive ? `${s.activeStyle}` : undefined}
                to="/">
              <img src={home} alt=""/>
              <span>Домой</span>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={({isActive}) => isActive ? `${s.activeStyle}` : undefined}
                to="dialogs">
              <img src={message} alt=""/>
              <span>Сообщения</span>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={({isActive}) => isActive ? `${s.activeStyle}` : undefined}
                     to="music">
              <img src={music} alt=""/>
              <span>Музыка</span>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={({isActive}) => isActive ? `${s.activeStyle}` : undefined}
                to="news">
              <img src={news} alt=""/>
              <span>Новости</span>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={({isActive}) => isActive ? `${s.activeStyle}` : undefined}
                to="settings">
              <img src={music} alt=""/>
              <span>Настройки</span>
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
