import { combineEpics, createEpicMiddleware } from "redux-observable";
import { userEpic } from './sign-in/user.epics';

export const rootEpic = combineEpics(userEpic);

export const epicMiddleware = createEpicMiddleware();
