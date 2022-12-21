import React from 'react'
import style from './Post.module.scss';

const Post = ({message}) => {
  return (
    <div>{message}</div>
  )
}

export default Post