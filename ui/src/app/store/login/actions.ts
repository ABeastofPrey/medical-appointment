import { Login } from './model';

export enum LoginActionTypes {
    GET_VCODE = 'GET_VCODE',
    GET_VCODE_SUCCESS = 'GET_VCODE_SUCCESS'
}

export interface LoginAction {
    type: LoginActionTypes
    payload: Login
}

export const getVcode = (phone: number): LoginAction => {
    return {
        type: LoginActionTypes.GET_VCODE,
        payload: { phone, vcode: null }
    };
};

export const getVcodeSuccess = (_payload: Login): LoginAction => {
    return {
        type: LoginActionTypes.GET_VCODE_SUCCESS,
        payload: { ..._payload }
    };
};
