import Router from 'koa-router';
import { userRouter } from './user/user.routes';
import { registerRouter } from './register/register.routes';

export const router = new Router();

router.use('/', registerRouter.routes(), registerRouter.allowedMethods());

router.use('/users', userRouter.routes(), userRouter.allowedMethods());
