import { LoginState } from './login.types';
import { Map } from 'immutable';

export enum LoginActionTypes {
    GET_VCODE = 'GET_VCODE',
    GET_VCODE_SUCCESS = 'GET_VCODE_SUCCESS',
    LOGIN = 'LOGON',
    LOGIN_SUCCESS = 'LOGON_SUCCESS',
}

export interface LoginAction {
    type: LoginActionTypes
    payload: LoginState
}

export const getVcode = (phone: number): LoginAction => {
    return {
        type: LoginActionTypes.GET_VCODE,
        payload: (Map({ phone: phone, vcode: null, isLogin: false }) as LoginState)
    };
};

export const getVcodeSuccess = (payload: LoginState): LoginAction => ({
    type: LoginActionTypes.GET_VCODE_SUCCESS, payload
});

export const login = (payload: LoginState): LoginAction => ({
    type: LoginActionTypes.LOGIN, payload
});

export const loginSuccess = (payload: LoginState): LoginAction => ({
    type: LoginActionTypes.LOGIN_SUCCESS, payload
});
