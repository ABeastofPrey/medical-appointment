export const queryLog = async(ctx, next) => {
    const st: number = new Date().getTime();
    await next();
    const ms = (new Date()).getTime() - st;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
};
