import { LoginState } from './login.types';
import { LoginAction, LoginActionTypes } from './login.actions';
import { Map } from 'immutable';

const initialState = Map({ vcode: null, phone: null, isLogin: false }) as LoginState;

export const loginFeatureKey = 'loginState';

export const login = (state = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LoginActionTypes.GET_VCODE_SUCCESS: {
            const vcode = action.payload.get('vcode');
            const phone = action.payload.get('phone');
            return state
                .set('vcode', vcode)
                .set('phone', phone);
        };
        case LoginActionTypes.LOGIN_SUCCESS: {
            const isLogin = action.payload.get('isLogin');
            return state.set('isLogin', isLogin);
        };
        default: return state;
    }
};
