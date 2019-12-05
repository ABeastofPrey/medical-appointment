import pino from 'pino';
import Koa from 'koa';
// import { Server } from 'http';
// import * as notifier from 'node-notifier';
import { routes } from './modules/user/routes';
import { compose, ifElse, isNil, path, always } from 'ramda';

const koa = new Koa();

const portPath = path(['env', 'Port']);

const logger = pino({ prettyPrint: { colorize: true, ignore: 'time' } });

const startLog = x => { logger.info(x); return x; };

const getPort = ifElse(isNil, always(8080), always);

const registRoutes = _app => _app.use(routes);

// const registMiddlewares = mw => _app => _app.use(mw);

const listen = (port: number) => koa.listen(port);

const listenOnPort = compose(listen, startLog, getPort, always(portPath(process)));

export const startServer = () => compose(listenOnPort, registRoutes)(koa);
