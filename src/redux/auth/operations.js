import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const register = createAsyncThunk('auth/register', async value => {
  const response = await axios.post('/users/signup', value);
  return response.data;
});

export const login = createAsyncThunk('auth/login', async value => {
  const response = await axios.post('/users/login', value);
  return response;
});

export const logout = createAsyncThunk('auth/logout', async () => {});

export const refreshUser = createAsyncThunk('auth/refresh', async () => {});
