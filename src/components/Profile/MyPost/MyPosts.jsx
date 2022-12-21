import React from 'react';

import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <p> My posts</p>
      <div>New post</div>
      <div className={style.posts}>
        <Post message='Первый'/>
        <Post message='Второй'/>
      </div>
    </div>
  );
};

export default MyPosts;
