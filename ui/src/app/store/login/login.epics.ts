import { ofType, ActionsObservable, combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { prop } from 'ramda';
import { LoginAction, LoginActionTypes, getVcodeSuccess, loginSuccess } from './login.actions';
import { getVcode, login } from './login.api';
import { LoginState } from './login.types';

const getVcodeEpic = (action$: ActionsObservable<LoginAction>) => action$.pipe(
    ofType(LoginActionTypes.GET_VCODE),
    mergeMap((action: LoginAction) => getVcode(action.payload.phone)),
    map(prop('response')),
    map((res: LoginState) => getVcodeSuccess(res))
);

const loginEpic = (action$: ActionsObservable<LoginAction>) => action$.pipe(
    ofType(LoginActionTypes.LOGIN),
    mergeMap((action: LoginAction) => login(action.payload)),
    map(prop('response')),
    map((res: LoginState) => loginSuccess(res))
);

export const userEpic = combineEpics(getVcodeEpic, loginEpic);
