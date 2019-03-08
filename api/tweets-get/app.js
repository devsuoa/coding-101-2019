const axios = require('axios');

const apiKey = process.env.TWITTER_API_KEY;
const secretKey = process.env.TWITTER_SECRET_KEY;

exports.handler = async (event, context, callback) => {

  // get the display name from request
  if (event.queryStringParameters === null || event.queryStringParameters.display_name === undefined) {
    const response = {
      statusCode: 400,
      body: JSON.stringify({
        message: "display_name required parameter omitted"
      })
    };
    callback(null, response);
  }
  const displayName = event.queryStringParameters.display_name;

  // get bearer token
  let token;
  try {
    const resp = await axios.post(
      'https://api.twitter.com/oauth2/token?grant_type=client_credentials', {}, {
        auth: {
          username: apiKey,
          password: secretKey
        }
      });

    token = resp.data.access_token;
  } catch (e) {
    console.error(e);

    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to authenticate"
      })
    };
    callback(null, response);
  }

  // get tweets
  try {
    let resp = await axios.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${displayName}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

    // extract tweet bodies
    let tweets = resp.data.map(a => a.text);

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        tweets: tweets
      })
    };

    // success
    callback(null, response);

  } catch (e) {
    console.error(e);

    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to get tweets"
      })
    };
    callback(null, response);
  }
};
