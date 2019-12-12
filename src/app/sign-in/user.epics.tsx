import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { UserAction, UserActionTypes, getVcodeSuccess } from './user.actions';

// const url = 'http://localhost:8080/user';
const url = 'user';
const options = {
    url,
    headers: {

    }
};

export const userEpic = action$ => {
    return action$.pipe(
        ofType(UserActionTypes.GET_VCODE),
        mergeMap((action: UserAction) => {
            ajax(options).subscribe(res => {
                console.log(res);
            });
            console.log(process.env);
            return of(1234);
        }),
        map((res: number) => getVcodeSuccess(res))
    );
};
