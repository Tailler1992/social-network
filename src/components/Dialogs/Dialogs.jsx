import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setNewMessage} from "../../features/counter/dialogsSlice";

import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const Dialog = ({id, name}) => {

  return (<li>
    <NavLink to={id} className={s.dialog}>
      <div className={s.dialogPhoto}></div>
      <div className={s.dialogName}>{name}</div>
    </NavLink>
  </li>);
}

const Message = ({message}) => {
  return (<div className={s.message}>{message}</div>);
}

const dialogsData = [
  {id: 1, name: "Gena"},
  {id: 2, name: "Lena"},
  {id: 3, name: "Pedro"},
  {id: 4, name: "Maks"},
]

const messagesData = [
  {id: 1, message: "Привет бро"},
  {id: 2, message: "Где ты?"},
  {id: 3, message: "С Днем рождения"},
  {id: 4, message: "Ау"},]

const Dialogs = () => {
  const dispatch = useDispatch();
  const messag = useSelector((state)=> state.message);

  return (<div className={s.dialogs}>
        <ul className={s.dialogList}>
          {dialogsData.map(({id, name}) => <Dialog key={id} name={name}/>)}
        </ul>
        <div className={s.messages}>
          {messagesData.map(({id, message}) => <Message key={id} message={message}/>)}
          <div>
            <textarea
                onChange={(e)=>{
                  dispatch(setNewMessage(e.target.value));
                }}
                placeholder='Введите сообщение'></textarea>
            <button>Отправить</button>
          </div>
        </div>
      </div>

  );
};

export default Dialogs;
