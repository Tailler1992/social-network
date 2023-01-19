import {useEffect, useState} from 'react';
import {profileApi} from '../../../utils/api';

const ProfileStatus = ({status}) => {
  const [editMode, setEditMode] = useState(false);
  const [userStatus, setUserStatus] = useState(status)

  useEffect(() => {
    if(editMode){
      profileApi.updateStatus(userStatus)
    }

  }, [userStatus])

  return (
    <div>
      {!editMode
        ? <div
          onDoubleClick={() => setEditMode(true)}>
          {userStatus}
        </div>
        : <input
          autoFocus={true}
          onChange={(e)=> setUserStatus(e.currentTarget.value)}
          onBlur={()=> setEditMode(false)}
          value={userStatus}/>}
    </div>
  );
};

export default ProfileStatus;