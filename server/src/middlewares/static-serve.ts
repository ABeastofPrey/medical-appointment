import koaStatic from 'koa-static';

export const staticServe = koaStatic('build/', 'index.html');
