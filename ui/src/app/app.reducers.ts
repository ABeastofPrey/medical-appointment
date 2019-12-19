import { combineReducers } from 'redux';
import { users } from './store/sign-in/user.reducers';

export const rootReducer = combineReducers({ users });
