const request = require("sync-request");

let apiUrl = "https://2woj5agcya.execute-api.ap-southeast-2.amazonaws.com/v1";

function setApi(link) { // backup incase something messes up on the day of the workshop.
    apiUrl = link;
};

function getTweets(userName) {
  let response = request(
    "GET",
    apiUrl + "/tweets?display_name=" + userName.toLowerCase()
  );
  let data = JSON.parse(response.getBody().toString());
  return data.tweets || [];
}

function detectSentiment(listOfText) {
  let response = request("POST", apiUrl + "/sentiment", {
    json: {
      texts: listOfText
    }
  });
  let sentiments = JSON.parse(response.getBody().toString());
  return sentiments || [];
}



module.exports = {
    getTweets,
    detectSentiment,
    setApi
}