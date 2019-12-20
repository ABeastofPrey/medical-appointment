import { LoginState } from './model';
import { LoginAction, LoginActionTypes } from './actions';

const initialState: LoginState = { vcode: null, phone: null, success: null };

export const login = (state = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LoginActionTypes.GET_VCODE_SUCCESS: {
            const { phone, vcode } = action.payload;
            return { ...state, vcode, phone };
        }
        default: return state;
    }
};
