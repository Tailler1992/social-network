import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [
    {id: 1, message: "Привет бро"},
    {id: 2, message: "Где ты?"},
    {id: 3, message: "С Днем рождения"},
    {id: 4, message: "Ау"},
  ]
}

export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    setNewMessage: (state, action) => {
      state.value.push(action.payload)
    },
  },
})

export const {setNewMessage} = dialogsSlice.actions;

export default dialogsSlice.reducer;