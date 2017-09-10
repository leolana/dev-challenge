import Router from 'koa-router';

const postRouter = new Router();

postRouter.get('/:termo', async (ctx) => {
  ctx.body = { message: 'some message', termo: ctx.params.termo };
});

module.exports = postRouter;
