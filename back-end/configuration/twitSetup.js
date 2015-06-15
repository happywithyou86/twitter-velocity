(function() {
  'use strict';

  module.exports = function(io) {
    var T = new io.twit({
      consumer_key        : io.config.TWITTER.consumer_key,
      consumer_secret     : io.config.TWITTER.consumer_secret,
      access_token        : io.config.TWITTER.access_token,
      access_token_secret : io.config.TWITTER.access_token_secret
    });

    return T;
  };
}());
