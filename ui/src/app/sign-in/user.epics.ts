import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { UserAction, UserActionTypes, getVcodeSuccess } from './user.actions';
import { getVcode } from './user.api';
import { path } from 'ramda';

export const userEpic = action$ => {
    return action$.pipe(
        ofType(UserActionTypes.GET_VCODE),
        mergeMap((action: UserAction) => getVcode(action.payload.phone)),
        map(path(['response', 'vcode'])),
        map((res: number) => getVcodeSuccess(res))
    );
};
