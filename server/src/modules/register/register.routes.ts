import Router from 'koa-router';
import { getVcode, login } from './register.controller';

export const registerRouter = new Router();

registerRouter.get('vcode', getVcode);

registerRouter.post('login', login);
