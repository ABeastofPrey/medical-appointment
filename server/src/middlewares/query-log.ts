export const queryLog = async (ctx, next) => {
    const { logger, method, url } = ctx;
    const st: number = new Date().getTime();
    await next();
    const ms = (new Date()).getTime() - st;
    logger.info(`${method} ${url} - ${ms}ms`);
};
