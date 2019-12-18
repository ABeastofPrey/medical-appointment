import { Logger } from 'pino';

export const setLogger = (logger: Logger) => async (ctx, next) => {
    ctx.logger = logger;
    await next();
};
