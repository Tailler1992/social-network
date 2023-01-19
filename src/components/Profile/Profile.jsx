import React, {useEffect, useState} from 'react';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {useParams} from 'react-router-dom';
import {profileApi} from '../../utils/api';



const Profile = () => {

  const [data, setData] = useState();
  const [status, setStatus] = useState('32');
  const {id} = useParams();

  useEffect(() => {
    profileApi.getProfile(id).then((res) => {
      setData(res);
    });

    profileApi.getStatus(id).then((res) => {
      setStatus(res);
    })

  }, [id]);

  if (!data) {
    return 'загрузка';
  }

  return (
    <>
      <ProfileInfo data={data} status={status}/>
      <MyPosts/>
    </>
  );
};

export default Profile;
