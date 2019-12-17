import Router from 'koa-router';
import { user } from './user/controller';
import { getVcode } from './rigister/controller';

const router = new Router();

router.get('/vcode', getVcode);

router.get('/user', user);

export const routes = router.routes();
