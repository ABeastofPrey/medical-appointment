import { compose, multiply } from 'ramda';
import { User } from '../user/user.model';

export const getVcode = async (ctx, next) => {
    const { phone } = ctx.query;
    const takeFour = multiply(10000);
    const _getVcode = compose(Math.ceil, takeFour, Math.random);
    ctx.body = { phone, vcode: _getVcode(), time: (new Date()).getTime() };
    await next();
};

export const login = async (ctx, next) => {
    const { phone, vcode } = ctx.request.body;
    const user = {
        name: `Vip${phone}`,
        phone,
        vcode
    };
    ctx.body = await User.create(user);
    await next();
};
