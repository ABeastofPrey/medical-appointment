import { User } from './user.model';

export const user = async (ctx, next) => {
    ctx.body = 'get user';
    await next();
};
