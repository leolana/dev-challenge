import Tweet from '../models/Tweet';

export default data => new Tweet(
  data.id,
  data.user.name,
  data.user.profile_image_url,
  data.text,
  data.created_at,
  data.user.screen_name,
);
