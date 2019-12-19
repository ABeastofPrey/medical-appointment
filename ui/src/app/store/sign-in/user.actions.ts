export enum UserActionTypes {
    GET_VCODE = 'GET_VCODE',
    GET_VCODE_SUCCESS = 'GET_VCODE_SUCCESS'
}

export interface UserAction {
    type: UserActionTypes
    payload: any
}

export const getVcode = (phone: number): UserAction => {
    return {
        type: UserActionTypes.GET_VCODE,
        payload: { phone }
    };
};

export const getVcodeSuccess = (_payload: { phone: number, vcode: number }): UserAction => {
    return {
        type: UserActionTypes.GET_VCODE_SUCCESS,
        payload: { ..._payload }
    };
};
