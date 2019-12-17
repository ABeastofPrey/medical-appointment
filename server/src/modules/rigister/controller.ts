import { compose, multiply } from 'ramda';

export const getVcode = async (ctx, next) => {
    const takeFour = multiply(10000);
    const _getVcode = compose(Math.floor, takeFour, Math.random);
    ctx.body = _getVcode();
    await next();
};
