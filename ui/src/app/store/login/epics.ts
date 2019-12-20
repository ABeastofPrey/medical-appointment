import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { LoginAction, LoginActionTypes, getVcodeSuccess } from './actions';
import { getVcode } from './api';
import { LoginState } from './model';
import { prop } from 'ramda';

export const userEpic = action$ => {
    return action$.pipe(
        ofType(LoginActionTypes.GET_VCODE),
        mergeMap((action: LoginAction) => getVcode(action.payload.phone)),
        map(prop('response')),
        map((res: LoginState) => getVcodeSuccess(res))
    );
};
