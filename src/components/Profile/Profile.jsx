import React from 'react';
import MyPosts from './MyPost/MyPosts';

import cover from '../../assets/img/cover.jpg';

import style from './Profile.module.scss';

const Profile = () => {
  return (
    <>
      <div className={style.info}>
        <img className={style.cover} src={cover} alt="" />
        <div className={style.avatar}></div>
      </div>
      <MyPosts />
    </>
  );
};

export default Profile;
