import compose from 'koa-compose';

export const allowOrigin = whiteList => async (ctx, next) => {
    if (ctx.request.header.origin !== ctx.origin && whiteList.includes(ctx.request.header.origin)) {
        ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
        ctx.set('Access-Control-Allow-Credentials', 'true');
    }
    await next();
};

export const allowMethods = async (ctx, next) => {
    if (ctx.method === 'OPTIONS') {
        ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
        ctx.set('Access-Control-Max-Age', String(3600 * 24));
        ctx.body = '';
    }
    await next();
};

export const allowCrossDomain = whiteList =>  compose([allowOrigin(whiteList), allowMethods]);
