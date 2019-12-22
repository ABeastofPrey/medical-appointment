import fs from 'fs';
import Koa from 'koa';
import pino from 'pino';
import path from 'path';
import compose from 'koa-compose';
import bodyParser from 'koa-bodyparser';
import { createServer as createHttpServer } from 'http';
import { createServer } from 'https';
import { routes } from './modules/app-routes';
import { compose as rCompose, ifElse, isNil, path as attrPath, always, useWith, curry } from 'ramda';
import { allowOrigin, allowMethods } from './middlewares/cross-domain';
import { staticServe } from './middlewares/static-serve';
import { setLogger } from './middlewares/logger';
import { queryLog } from './middlewares/query-log';
import { connect2DB } from './middlewares/mongo-db';
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

// const registMiddleware = mw => _server => _server.use(mw);

const registMiddlewares = ([...mws]) => _server => _server.use(compose(mws));

const httpServer = _server => createHttpServer(_server.callback());

const httpsServer = _server => createServer(credentials, _server.callback());

const registCrossDomain = registMiddlewares([allowOrigin(whiteList), allowMethods]);

// const getHttpsServer = _server => compose(httpsServer, registCrossDomain);

const getServer = rCompose(httpServer, registMiddlewares([setLogger(logger), bodyParser(), queryLog, staticServe, connect2DB(), routes]));

// const getServer = rCompose(httpsServer, registCrossDomain, registMiddlewares([setLogger(logger), bodyParser(), queryLog, staticServe, routes]));

const startHttpsServer = curry((port, _server) => _server.listen(port, always(logger.info(port))));

export const startServer = () => useWith(startHttpsServer, [getPort, getServer])(process, new Koa());
