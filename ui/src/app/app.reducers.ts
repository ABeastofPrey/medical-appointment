import { combineReducers } from 'redux-immutable';
import { loginFeatureKey, login } from './store/login/login.reducers';

export const rootReducer = combineReducers({ [loginFeatureKey]: login });
