export const getLoginState = state => state.login;

export const selectVcode = state => getLoginState(state).vcode;

export const selectPhone = state => getLoginState(state).phone;
