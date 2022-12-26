import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {dialogsSlice} from "../features/counter/dialogsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dialogsSlice
  },
})