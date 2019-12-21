import { AppState } from '../../app.store';
import { loginFeatureKey } from './login.reducers'

export const getLoginState = (state: AppState) => state.get(loginFeatureKey);

export const selectVcode = (state: AppState) => getLoginState(state).get('vcode');

export const selectPhone = (state: AppState) => getLoginState(state).get('phone');

export const selectLoginState = (state: AppState) => getLoginState(state).get('isLogin');
