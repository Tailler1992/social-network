import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import s from './Header.module.scss';
import {setUserData} from '../../redux/features/authSlice';
import {NavLink} from 'react-router-dom';
import {authApi} from '../../utils/api';

const Header = () => {

  const {userId, email, login, isAuth} = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    authApi.getAuth().then((res) => {
        if (res.resultCode === 0) {
          const {email, id, login} = res.data;
          dispatch(setUserData({email, id, login}));
        }
      }
    );
  }, [dispatch]);

  return (
    <div className={s.header}>
      {isAuth ? <div> {login} </div> : <NavLink to={'/login'}>Авторизация</NavLink>}
    </div>
  );
};

export default Header;