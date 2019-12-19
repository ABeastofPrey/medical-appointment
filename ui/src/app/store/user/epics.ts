import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { UserAction, UserActionTypes, getVcodeSuccess } from './actions';
import { getVcode } from './api';
import { prop } from 'ramda';

export const userEpic = action$ => {
    return action$.pipe(
        ofType(UserActionTypes.GET_VCODE),
        mergeMap((action: UserAction) => getVcode(action.payload.phone)),
        map(prop('response')),
        map((res: { phone: number, vcode: number }) => getVcodeSuccess(res))
    );
};
