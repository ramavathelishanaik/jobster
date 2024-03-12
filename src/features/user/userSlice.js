import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addUserToLocalStroage,
  getUserDataFromLocalStroage,
  removeUserFromLocalStroage,
} from '../../utils/localStroage';

import {
  registerUserThunk,
  loginUserThunk,
  updateUserThunk,
  clearStoreThunk
} from './userThunk';



const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserDataFromLocalStroage(),
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  registerUserThunk
);

export const loginUser = createAsyncThunk('user/loginUser', loginUserThunk);

export const updateUser = createAsyncThunk('user/updateUser', updateUserThunk);

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStroage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStroage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      //login

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStroage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })

      //update user
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStroage(user);
        toast.success('profile updated');
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected, (state, { payload }) => {
        toast.error('There was an error');
      });
    
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
