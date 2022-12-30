import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: 1, message: 'Привет бро'},
  {id: 2, message: 'Где ты?'},
  {id: 3, message: 'С Днем рождения'},
  {id: 4, message: 'Ау'}
];

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setNewMessage: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const {setNewMessage} = messagesSlice.actions;
export default messagesSlice.reducer;