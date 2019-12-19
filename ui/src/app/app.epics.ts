import { combineEpics, createEpicMiddleware } from "redux-observable";
import { userEpic } from './store/sign-in/user.epics';

export const rootEpic = combineEpics(userEpic);

export const epicMiddleware = createEpicMiddleware();
