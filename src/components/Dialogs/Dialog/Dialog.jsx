import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.scss';
import React from 'react';

const Dialog = ({id, name}) => {

  return (<li>
    <NavLink to={id} className={s.dialog}>
      <div className={s.dialogPhoto}></div>
      <div className={s.dialogName}>{name}</div>
    </NavLink>
  </li>);
};

export default Dialog;