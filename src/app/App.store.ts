import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./App.reducers";
import { rootEpic, epicMiddleware } from './App.epics';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)) );

epicMiddleware.run(rootEpic);
