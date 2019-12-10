import { combineReducers } from 'redux';
import { users } from './sign-in/user.reducers';

export const rootReducer = combineReducers({ users });
