exports.handler = async (event, context, callback) => {

  response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello from tweets-get'
    })
  }

  // success
  callback(null, response)
}
