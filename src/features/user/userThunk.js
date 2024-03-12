import customFetch from '../../utils/axios';
import { clearAllJobsState } from '../alljobs/alljobsSlice';
import { logoutUser } from './userSlice';
import { clearValues } from '../job/jobSlice';

export const registerUserThunk = async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/register', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }

  export const loginUserThunk = async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/login', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }

  export const updateUserThunk = async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch('/auth/updateUser', user, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }

  export const clearStoreThunk=async(message,thunkAPI)=>{
    try {
        thunkAPI.dispatch(logoutUser(message));
        thunkAPI.dispatch(clearAllJobsState())
        thunkAPI.dispatch(clearValues())
        return Promise.resolve()
        
    } catch (error) {
        return Promise.reject()
        
    }
  }