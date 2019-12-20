import { AppState } from '../../app.store';

export const getLoginState = (state: AppState) => state.login;

export const selectVcode = (state: AppState) => getLoginState(state).vcode;

export const selectPhone = (state: AppState) => getLoginState(state).phone;

export const selectLoginState = (state: AppState) => getLoginState(state).isLogin;
