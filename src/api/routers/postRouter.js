import Router from 'koa-router';
import Twitter from 'twitter';
import twitterStream from '../midlewares/twitterStreamMidleware';

const postRouter = new Router();

const twitterClient = new Twitter({
  consumer_key: 'sT4InFgBUms2PBmAhQNVifMMK',
  consumer_secret: 'T3MsLJgSRK96EnIf3OwR4nJFu7mpdZlADBewdHShi8QtOf66Iv',
  access_token_key: '4843073440-lwyRDtg6GSqLxtLJGhnlB9JpEe8r9cyh9ZToIRq',
  access_token_secret: 'lbjRIx68RPYARqxk1v1GYVJXgSCh8qdtbSy1UoHrmI5uQ',
});

const searchTwitter = term => new Promise((resolve, reject) => {
  twitterClient.get('search/tweets', { q: term }, (error, tweets) => {
    if (error) {
      reject(error);
    } else {
      resolve(tweets);
    }
  });
});

postRouter.get('/:term', async (ctx) => {
  const [tweets] = await Promise.all([searchTwitter(ctx.params.term)]);

  ctx.body = tweets.statuses.map(twitterStream);
});

module.exports = postRouter;
