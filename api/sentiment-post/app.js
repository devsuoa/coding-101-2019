exports.handler = async (event, context, callback) => {

  response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello from sentiment-post'
    })
  }

  // success
  callback(null, response)
}
