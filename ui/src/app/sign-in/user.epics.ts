import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserAction, UserActionTypes, getVcodeSuccess } from './user.actions';
import { getVcode } from './user.api';

export const userEpic = action$ => {
    return action$.pipe(
        ofType(UserActionTypes.GET_VCODE),
        mergeMap((action: UserAction) => {
            getVcode().subscribe(res => {
                console.log(res);
            });
            console.log(process.env);
            return of(1234);
        }),
        map((res: number) => getVcodeSuccess(res))
    );
};
