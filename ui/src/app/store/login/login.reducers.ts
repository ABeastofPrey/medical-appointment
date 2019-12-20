import { LoginState } from './login.types';
import { LoginAction, LoginActionTypes } from './login.actions';

const initialState: LoginState = { vcode: null, phone: null, success: null };

export const login = (state = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LoginActionTypes.GET_VCODE_SUCCESS: {
            const { phone, vcode } = action.payload;
            return { ...state, vcode, phone };
        };
        case LoginActionTypes.LOGIN_SUCCESS: {
            const { success } = action.payload;
            return { ...state, success };
        };
        default: return state;
    }
};
