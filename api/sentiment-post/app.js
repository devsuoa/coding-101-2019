const AWS = require('aws-sdk')

exports.handler = (event, context, callback) => {

  // create client
  const comprehend = new AWS.Comprehend();

  // get texts to analyse from request
  let request = JSON.parse(event.body);

  // define params to detect sentiment
  let params = {
    LanguageCode: 'en',
    TextList: request.texts
  };

  // get sentiment
  comprehend.batchDetectSentiment(params, (err, data) => {

    // check if the service returend an error
    if (err) {
      let response = {
        statusCode: 500,
        body: JSON.stringify(err)
      };

      callback(null, response);
    }

    // no errors from service
    let sentiments = data.ResultList.map(a => a.Sentiment);
    let response = {
      statusCode: 200,
      body: JSON.stringify(sentiments)
    };

    callback(null, response);
  })
}
