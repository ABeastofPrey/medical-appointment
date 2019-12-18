import { compose, multiply } from 'ramda';

export const getVcode = async (ctx, next) => {
    const { phone } = ctx.query;
    const takeFour = multiply(10000);
    const _getVcode = compose(Math.ceil, takeFour, Math.random);
    ctx.body = { phone, vcode: _getVcode() , time: (new Date()).getTime()};
    await next();
};
