import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {userAPI} from '../../../utils/api';

import s from './User.module.scss';

const User = ({name, photo, status, id, followed}) => {

  return (
    <li className={s.user}>
      <NavLink to={'/user/' + id}>
        <div className={s.imgContainer}>
          {photo ? <img src={photo} alt={name}/> : <div className={s.plug}></div>}
        </div>
      </NavLink>
      <div className={s.info}>
        <p className={s.name}><i>Nickname:</i> {name}</p>
        <p className={s.status}><i>Status:</i> {status && status.length > 20 ? status.slice(0, 27) + '...' : status}</p>
      </div>
      <div>
        {
          followed
            ? <button
              onClick={() => {
                userAPI.deleteFollow(id).then();
              }}
              className={s.button}> Удалить из друзей
            </button>
            : <button
              onClick={() => {
                userAPI.postFollow(id).then();
              }}
              className={s.button}> Добавить в друзья
            </button>
        }
      </div>
    </li>
  );
};

export default User;