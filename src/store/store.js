import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '../features/counterSlice';
import messagesSlice from "../features/messagesSlice";
import usersSlice from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    messagesSlice,
    usersSlice
  },
})