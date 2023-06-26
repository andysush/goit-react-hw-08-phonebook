export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleRegisterUser = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLoginUser = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogoutUser = state => {
  state.isLoading = false;
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleRefreshUser = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
