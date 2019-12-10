import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserAction, UserActionTypes, getVcodeSuccess } from './user.actions';

export const userEpic = action$ => {
    return action$.pipe(
        ofType(UserActionTypes.GET_VCODE),
        mergeMap((action: UserAction) => {
            console.log(action.payload);
            return of(1234);
        }),
        map((res: number) => getVcodeSuccess(res))
    );
};
