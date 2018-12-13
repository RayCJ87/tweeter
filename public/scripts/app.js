/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function composeSwitch(){
  // $('.container .new-tweet').slideToggle("slow");
  $('.container .new-tweet').slideToggle(100);
  if ($('.container .new-tweet').is(":visible")){
    $('.container .new-tweet form textarea').select();
  }
}


function loadTweets(){

  var tweetsArray = $.ajax({url: "/tweets" , method: 'GET'});

  tweetsArray.done(function(tweetsArray) {
    $('.tweetContainer').empty();
    var theTweets = tweetsArray.reverse();
    renderTweets(theTweets);
  })
}

function escape(str){
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function postTweet() {
  var $input = $("input[type='submit']");
  // var tw = $(newTweet);
  $input.on('click', function(event){
    var newTweet = $(".container .new-tweet form").serialize();

    event.preventDefault();
    if ($('textarea').val().length === 0){
      $('.container .new-tweet .errorMes').text('   Warning!!  Please type something!  ');
      $('.container .new-tweet .errorMes').slideDown();
    }
    else if ($('textarea').val().length > 140) {
     $('.container .new-tweet .errorMes').text('   Warning!!  Your tweet is too long. Please keep it shorter!  ');
     $('.container .new-tweet .errorMes').slideDown();
    }
    else{
          $('.container .new-tweet .errorMes').slideUp();
          console.log("We got a new submit, let's start Ajax!");
          $.ajax({ url: "/tweets/", data: newTweet, method: 'POST' }).then(function(newTweet){
            console.log("Here is a new Tweet!");
            loadTweets();
          });
    }
  });
};


function renderTweets(tweets){
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('.tweetContainer').append($tweet);
  }
}


function createTweetElement(tweet){
  // console.log(tweet)
  var dateObj = tweet.created_at;
  var theDate = new Date(1000*dateObj);
  var article = `
        <article classs="tweet">
        <header>
          <figure>
            <img class="logo" src=${tweet.user.avatars.small} width="80px" height="80px">
            <figcaption class="header">${tweet.user.name}</figcaption>
          </figure>
          <span class="nameLink">${tweet.user.handle}</span>
        </header>
        <p class="tweetContent">${escape(tweet.content.text)}
        </p>
        <div class="footer">
          <span class="timeInfo">${theDate.toGMTString()}</span>
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


// console.log($tweet);
$( document ).ready(function() {
  loadTweets();
  postTweet();

})
