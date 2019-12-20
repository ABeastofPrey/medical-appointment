import { combineReducers } from 'redux';
import { login } from './store/login/login.reducers';

export const rootReducer = combineReducers({ login });
