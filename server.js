import Koa from 'koa';
import bodyParser from 'koa-body';
import cors from 'koa-cors';
import corsError from 'koa-cors-error';
import gzip from 'koa-compress';
import postRouter from './src/routers/index';

const server = new Koa();

server.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  headers: ['Content-Type', 'Authorization', 'Accept-Ranges', 'X-Minimum-Required-Version', 'X-App-Version'],
  expose: ['X-Minimum-Required-Version'],
  credentials: true,
}));
server.use(bodyParser());
server.use(corsError);
server.use(gzip());

postRouter(server);

const serverListen = server.listen(3000);

export default serverListen;
