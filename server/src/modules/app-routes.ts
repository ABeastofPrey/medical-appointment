import Router from 'koa-router';
import { registUserRoutes } from './user/user.routes';
import { registRegisterRoutes } from './register/register.routes';

export const router = new Router();

registRegisterRoutes(router);

registUserRoutes(router);

export const routes = router.routes();
