import { LoginState } from './model';

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
        payload: { phone, vcode: null, success: null }
    };
};

export const getVcodeSuccess = (_payload: LoginState): LoginAction => {
    return {
        type: LoginActionTypes.GET_VCODE_SUCCESS,
        payload: { ..._payload }
    };
};

export const login = (_payload: LoginState): LoginAction => {
    return {
        type: LoginActionTypes.LOGIN,
        payload: { ..._payload }
    };
};

export const loginSuccess = (_payload: LoginState): LoginAction => {
    return {
        type: LoginActionTypes.LOGIN_SUCCESS,
        payload: { ..._payload }
    };
};