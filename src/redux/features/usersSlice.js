import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userAPI} from '../../utils/api';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsersStatus',
  async (arg, thunkAPI) => {
    const {page, count} = arg;

    const response = await userAPI.getUsers(page, count);
    const {totalCount} = response;
    thunkAPI.dispatch(setPagesCount(totalCount));

    return response.items;
  }
);

const initialState = {
  users: [],
  status: 'loading',
  page: 1,
  count: 7,
  usersCount: null,
  isFetching: false
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    setPagesCount: (state, action) => {
      state.usersCount = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'success';
        state.isFetching = false;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.users = [];
        state.status = 'loading';
        state.isFetching = true;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.users = [];
        state.status = 'error';
        state.isFetching = false;
      });
  }
});

export const {setUser, setPagesCount} = usersSlice.actions;
export default usersSlice.reducer;