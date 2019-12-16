import fs from 'fs';
import Koa from 'koa';
import pino from 'pino';
import path from 'path';
import compose from 'koa-compose';
import { createServer } from 'https';
import { routes } from './modules/user/routes';
import { compose as rCompose, ifElse, isNil, path as attrPath, always, useWith, curry } from 'ramda';
import { allowOrigin, allowMethods } from './middlewares/cross-domain';
import { staticServe } from './middlewares/static-serve';
// import * as notifier from 'node-notifier';

// 跨域白名单
const whiteList = ['http://localhost:3000'];

//根据项目的路径导入生成的证书文件
const privateKey = fs.readFileSync(path.join(__dirname, './assets/certificate/server.key'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, './assets/certificate/server.crt'), 'utf8');
const credentials = { key: privateKey, cert: certificate };

const processPort = attrPath(['env', 'Port']);

const getPort = rCompose(ifElse(isNil, always(8080), always), processPort);

const logger = pino({ prettyPrint: { colorize: true, ignore: 'time' } });

const registRoutes = _server => _server.use(routes);

const registMiddleware = mw => _server => _server.use(mw);

const registMiddlewares = ([...mws]) => _server => _server.use(compose(mws));

const httpsServer = _server =>  createServer(credentials, _server.callback());

const registCrossDomain = registMiddlewares([allowOrigin(whiteList), allowMethods]);

const getHttpsServer = rCompose(httpsServer, registRoutes, registMiddleware(staticServe), registCrossDomain);

const startHttpsServer = curry((port, _server) => _server.listen(port, always(logger.info(port))));

export const startServer = () => useWith(startHttpsServer, [getPort, getHttpsServer])(process, new Koa());
