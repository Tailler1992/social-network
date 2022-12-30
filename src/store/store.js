import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '../features/counterSlice';
import messagesSlice from "../features/messagesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    messagesSlice
  },
})