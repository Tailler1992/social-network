import s from './User.module.scss';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../redux/features/usersSlice';
import {useEffect, useState} from 'react';
import {userAPI} from '../../../utils/api';

const User = ({name, photo, status, id}) => {
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState(false);


  useEffect(() => {
    if (followed) {
      userAPI.deleteFollow(id).then()
    } else {
      userAPI.postFollow(id).then()
    }
  }, [followed]);

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
        <button
          onClick={() => setFollowed(!followed)}
          className={s.button}> {followed ? 'Удалить из друзей' : 'Добавить в друзья'}
        </button>
      </div>
    </li>
  );
};

export default User;