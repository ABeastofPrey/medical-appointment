import * as Router from 'koa-router';
import { user } from './controller';

const router = new Router();

router.get('/user', user);

export const routes = router.routes();
