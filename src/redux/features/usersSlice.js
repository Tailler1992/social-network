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
  isFetching: false,
  pagination: {
    page: 1,
    count: 10,
    usersCount: null
  }
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setPagesCount: (state, action) => {
      state.pagination.usersCount = action.payload;
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'success';
        state.isFetching = false;
        console.log('fulfilled');
      })
      .addCase(fetchUsers.pending, (state) => {
        state.users = [];
        state.status = 'loading';
        state.isFetching = true;
        console.log('loading');
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.users = [];
        state.status = 'error';
        state.isFetching = false;
        console.log('error');
      });
  }
});

export const {setPagesCount, setPage} = usersSlice.actions;
export default usersSlice.reducer;