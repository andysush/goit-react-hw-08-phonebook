import {
  handleLoginUser,
  handleLogoutUser,
  handlePending,
  handleRefreshUser,
  handleRegisterUser,
  handleRejected,
} from './handlers';
import { loginUser, logoutUser, refreshUser, registerUser } from './thunks';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleRegisterUser)
      .addCase(loginUser.fulfilled, handleLoginUser)
      .addCase(logoutUser.fulfilled, handleLogoutUser)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
