import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(register.pending, login.pending, logout.pending), state => {
        state.error = null;
        state.loading = true;
      })
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, refreshUser.rejected),
        (state, action) => {
          state.error = action.payload;
        }
      );
  },
});

export default slice.reducer;
