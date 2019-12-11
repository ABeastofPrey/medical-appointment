import pino from 'pino';
import Koa from 'koa';
// import cors from 'koa2-cors';
// import { Server } from 'http';
// import * as notifier from 'node-notifier';
import { routes } from './modules/user/routes';
import { compose, ifElse, isNil, path, always } from 'ramda';
import { allowCrossDomain } from './middlewares/cross-domain';

const server = new Koa();
const whiteList = ['http://localhost:3000'];

// app.use(cors());

const portPath = path(['env', 'Port']);

const logger = pino({ prettyPrint: { colorize: true, ignore: 'time' } });

const startLog = x => { logger.info(x); return x; };

const getPort = ifElse(isNil, always(8080), always);

const registRoutes = _app => _app.use(routes);

const registMiddleware = mw => _app => _app.use(mw);

const listen = (port: number) => server.listen(port);

const listenOnPort = compose(listen, startLog, getPort, always(portPath(process)));

const registCrossDomain = registMiddleware(allowCrossDomain(whiteList));

export const startServer = () => compose(listenOnPort, registRoutes, registCrossDomain)(server);
