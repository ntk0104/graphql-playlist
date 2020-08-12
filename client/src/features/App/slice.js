/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { setCookie, deleteAllCookies } from 'utils/cookies';
import { loginApi } from 'api/authentication';
import { history } from 'utils/history';

export const initialState = {
  token: null,
  username: null,
  loading: false,
};

const currentUserSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
    },
    logoutSuccess(state, action) {
      state.token = null;
    },
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { name: sliceKey } = currentUserSlice;
export const {
  actions: { loginSuccess, logoutSuccess, toggleLoading },
  name,
} = currentUserSlice;
export default currentUserSlice.reducer;

export const onLogout = () => dispatch => {
  dispatch(toggleLoading(true));
  deleteAllCookies();
  dispatch(logoutSuccess());
  dispatch(toggleLoading(false));
  history.push('/login');
};

export const onLogin = (email, password) => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(toggleLoading(true));
    return loginApi(email, password)
      .then(res => {
        const { token } = res;
        setCookie('token', token);
        dispatch(loginSuccess({ token }));
        dispatch(toggleLoading(false));
        resolve();
      }).catch(error => {
        dispatch(toggleLoading(false));
        reject(error);
      });
  });
};
