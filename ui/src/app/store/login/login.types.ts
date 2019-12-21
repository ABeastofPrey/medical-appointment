import { Map } from 'immutable';

export type loginKeys = 'phone' | 'vcode' | 'isLogin';

export type LoginState = Map<loginKeys, number | boolean>;
