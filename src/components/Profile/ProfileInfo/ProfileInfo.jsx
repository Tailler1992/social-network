import React from "react";
import cover from "../../../assets/img/cover.jpg";
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div className={s.info}>
            <img className={s.cover} src={cover} alt=""/>
            <div className={s.avatar}></div>
        </div>
    );
}

export default ProfileInfo;