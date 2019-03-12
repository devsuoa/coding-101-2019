const {getTweets, detectSentiment} = require('coding101module');

// get tweets
var tweets = getTweets('realDonaldTrump');

// analyse tweets for sentiment
var sentiment = detectSentiment(tweets);

// initialise counters
var positive = 0;
var negative = 0;
var confused = 0;
var neutral = 0;

// iterate over the sentiment
for (var i = 0; i < sentiment.length; i = i + 1) {
  var s = sentiment[i];

  if (s == "POSITIVE") {
    positive = positive + 1;
  } else if (s == "NEGATIVE") {
    negative = negative + 1;
  } else if (s == "CONFUSED") {
    confused = confused + 1;
  } else if (s == "NEUTRAL") {
    neutral = neutral + 1;
  }
}

// display the results
console.log("There were " + positive + " postiive tweets.");
console.log("There were " + negative + " negative tweets.");
console.log("There were " + confused + " confused tweets.");
console.log("There were " + neutral + " neutral tweets.");
