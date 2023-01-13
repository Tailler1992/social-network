import React from 'react';
import cover from '../../../assets/img/cover.jpg';
import s from './ProfileInfo.module.scss';

const ProfileInfo = ({data}) => {
  const {aboutMe, contacts, fullName, lookingForAJob, lookingForAJobDescription, photos, userId} = data;
  const avatar = photos.large;

  return (
    <div>
      <div className={s.cover}>
        <div className={s.img}>
          {avatar ? <img className={s.avatar} src={avatar} alt=""/> : <div className={s.plug}></div>}
        </div>
        <div>
          <p className={s.fullName}>{fullName}</p>
          <p className={s.about}>{aboutMe}</p>

          {lookingForAJob &&
            <div>
              <p className={s.job}> Нахожусь в поиске работы </p>
              <p className={s.job}> {lookingForAJobDescription} </p>
            </div>
          }
        </div>

      </div>
    </div>
  );
};

export default ProfileInfo;