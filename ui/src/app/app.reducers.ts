import { combineReducers } from 'redux';
import { login } from './store/login/reducers';

export const rootReducer = combineReducers({ login });
