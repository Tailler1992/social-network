import React, {useEffect, useState} from 'react';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import axios from 'axios';
import {useParams} from 'react-router-dom';


const Profile = () => {

  const [data, setData] = useState();
  const {id} = useParams();

  useEffect(() => {
    const url = 'https://social-network.samuraijs.com/api/1.0/profile';
    axios.get(`${url}/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });


  }, []);

  if (!data) {
    return 'загрузка';
  }

  return (
    <>
      <ProfileInfo data={data}/>
      <MyPosts/>
    </>
  );
};

export default Profile;
