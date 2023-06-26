import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credls, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credls);
      setAuthHeader(data.token);
      toast.success('Registration is Successfuly)');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Network Error... Please, try again later...')
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credls, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credls);
      toast.success('Log In is Successfuly)');
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Network Error... Please, try again later...')
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('users/logout');
      toast.success('You are Logged Out Successfuly)');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Network Error... Please, try again later...')
      );
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return thunkAPI.rejectWithValue('No valid token');
    setAuthHeader(token);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        toast.error('Network Error... Please, try again later...')
      );
    }
  }
);
