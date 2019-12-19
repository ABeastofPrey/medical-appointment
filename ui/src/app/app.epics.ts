import { combineEpics, createEpicMiddleware } from "redux-observable";
import { userEpic } from './store/login/epics';

export const rootEpic = combineEpics(userEpic);

export const epicMiddleware = createEpicMiddleware();
