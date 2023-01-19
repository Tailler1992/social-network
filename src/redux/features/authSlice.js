import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

// A!bq9xkVRg9uZxF

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const {email, id, login} = action.payload;
      state.userId = id;
      state.email = email;
      state.login = login;
      state.isAuth = true;
    }
  }
});


export const {setUserData} = authSlice.actions;

export default authSlice.reducer;