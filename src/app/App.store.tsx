import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./App.reducers";
import { rootEpic, epicMiddleware } from './App.epics';

export const appStore = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);
