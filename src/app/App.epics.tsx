import { combineEpics, createEpicMiddleware } from "redux-observable";


import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { of } from "rxjs";

export const addTodoEpic = (action$: any) => {
  return action$.pipe(
    ofType('ADD_TODO'),
    mergeMap((action: any) => {
      return of(action.payload);
    }),
    map(res => {
      return of(res);
    })
  );
};


export const rootEpic = combineEpics(addTodoEpic);

export const epicMiddleware = createEpicMiddleware();
