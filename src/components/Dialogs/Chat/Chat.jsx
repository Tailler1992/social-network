import React, {useState} from 'react';
import s from './Chat.module.scss';
import {v4} from 'uuid';
import {setNewMessage} from '../../../redux/features/messagesSlice';
import {useDispatch} from 'react-redux';

const Chat = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const dispatch = useDispatch();

  const addNewMessage = () => {
    const newMessage = {
      id: v4(),
      message: textareaValue
    };

    dispatch(setNewMessage(newMessage));
    setTextareaValue('');
  };

  return (
    <div className={s.chat}>
      <textarea
        className={s.textarea}
        onChange={(e) => setTextareaValue(e.target.value)}
        value={textareaValue}
        placeholder="Введите сообщение">
      </textarea>
      <button
        className={s.btn}
        onClick={() => addNewMessage()}
      >Отправить
      </button>
    </div>
  );
};

export default Chat;