import Router from 'koa-router';
import { user } from './controller';

const router = new Router();

// router.get('/', async (ctx, next) => {
//     ctx.body = 'hello world';
//     await next();
// });

router.get('/user', user);

export const routes = router.routes();
