import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./app.reducers";
import { rootEpic, epicMiddleware } from './app.epics';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)) );

epicMiddleware.run(rootEpic);
