/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function renderTweets(tweets){
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('.tweetContainer').append($tweet);
  }
}

function createTweetElement(tweet){
  console.log(tweet)
  var article = `
        <article>
        <img class="logo" src=${tweet.user.avatars.small} width="80px" height="80px">
        <span class="header">${tweet.user.name}</span>
        <span class="nameLink">${tweet.user.handle}</span>
        <div>
        <p class="tweetContent">${tweet.content.text}
        </p>
        </div>
        <div class="footer">
          <span class="timeInfo">${tweet.created_at}</span>
          <img class="flag" src="/images/flag.png" width="20px" height="20px">
          <img class="retweet" src="/images/retweet.png" width="20px" height="20px">
          <img class="heart" src="/images/heart.png" width="20px" height="20px">
          </p>
        </div>
      </article>`;

  let $tweet = $(article).addClass('tweet');
  return $tweet;
}

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


// var $tweet = createTweetElement(tweetData);
// console.log($tweet);
$( document ).ready(function() {
  renderTweets(data);
})
