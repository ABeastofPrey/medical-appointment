import { ofType, ActionsObservable, combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { prop, compose } from 'ramda';
import { LoginAction, LoginActionTypes, getVcodeSuccess, loginSuccess } from './login.actions';
import { getVcode, login } from './login.api';
import { LoginState } from './login.types';
import { fromJS } from 'immutable';

const getVcodeEpic = (action$: ActionsObservable<LoginAction>) => action$.pipe(
    ofType(LoginActionTypes.GET_VCODE),
    mergeMap((action: LoginAction) => getVcode(action.payload.get('phone'))),
    map(compose(fromJS, prop('response'))),
    map((res: LoginState) => getVcodeSuccess(res))
);

const loginEpic = (action$: ActionsObservable<LoginAction>) => action$.pipe(
    ofType(LoginActionTypes.LOGIN),
    mergeMap((action: LoginAction) => login({ phone: action.payload.get('phone'), vcode: action.payload.get('vcode') })),
    map(compose(fromJS, prop('response'))),
    map((res: LoginState) => loginSuccess(res))
);

export const userEpic = combineEpics(getVcodeEpic, loginEpic);
