import Router from 'koa-router';
import { user } from './user/user.controller';
import { getVcode, login } from './rigister/rigister.controller';

const router = new Router();

router.get('/vcode', getVcode);

router.post('/login', login);

router.get('/user', user);

export const routes = router.routes();
