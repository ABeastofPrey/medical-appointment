import { Login } from './model';
import { LoginAction, LoginActionTypes } from './actions';

const initialState: Login = { vcode: null, phone: null };

export const login = (state = initialState, action: LoginAction): Login => {
    switch (action.type) {
        case LoginActionTypes.GET_VCODE_SUCCESS: {
            const { phone, vcode } = action.payload;
            return { ...state, vcode, phone };
        }
        default: return state;
    }
};
