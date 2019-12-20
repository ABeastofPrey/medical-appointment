import { combineEpics, createEpicMiddleware, /* Epic*/ } from "redux-observable";
import { userEpic } from './store/login/login.epics';
// import { AppState } from './app.store';

// export type Action<T extends string, P> = {
//     type: T;
//     payload: P;
// };

// export type AppAction = {

// }

// export type AppEipc = Epic<AppState>;

export const rootEpic = combineEpics(userEpic);

export const epicMiddleware = createEpicMiddleware();
