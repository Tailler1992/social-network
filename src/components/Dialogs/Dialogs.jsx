import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import s from './Dialogs.module.scss';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import Chat from './Chat/Chat';

const dialogsData = [
  {id: 1, name: 'Gena'},
  {id: 2, name: 'Lena'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Maks'}
];

const Dialogs = () => {
  const messages = useSelector((state) => state.messagesSlice);
  const {isAuth} = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  useEffect(()=> {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth])

  return (
    <div className={s.dialogs}>
      <div>
        <ul className={s.dialogList}>
          {dialogsData.map(({id, name}) => <Dialog key={id} name={name}/>)}
        </ul>
      </div>
      <div className={s.messages}>
        <div>
          <ul>
            {messages.map(({id, message}) => <Message key={id} message={message}/>)}
          </ul>
        </div>
        <Chat/>
      </div>
    </div>

  );
};

export default Dialogs;
