import React, {useRef} from 'react';

import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    const refContainer = useRef();
    const addPost = () => {
      console.log(refContainer)
    }

    return (
      <div>
        <p> My posts</p>
        <textarea ref={refContainer}></textarea>
        <button onClick={addPost}>Добавить пост
        </button>
        <div>New post</div>
        <div className={style.posts}>
          <Post message='Первый'/>
          <Post message='Второй'/>
        </div>
      </div>
    );
  }
;

export default MyPosts;
