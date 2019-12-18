import { User } from './model';

export const user = async (ctx, next) => {
    ctx.body = new User('1111', 'Hsiu');
    await next();
};
