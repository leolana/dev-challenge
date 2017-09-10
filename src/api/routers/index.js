import mount from 'koa-mount';
import postRouter from './postRouter';

export default function router(server) {
  server.use(mount('/api/post', postRouter.routes()));
}

