(function() {
  'use strict';

  var app               = io.express(),
      twitterGet        = require('../impl/twitter/http_get'),
      streamTwitterGet  = require('../impl/twitter/http_get_stream'),
      twitterPost       = require('../impl/twitter/http_post');

  app.route('/lists/show')
    .get(twitterGet.listShow);

  app.route('/lists/create')
    .post(twitterPost.listsCreate);

  app.route('/lists/members/create')
    .post(twitterPost.listsMembersCreate);

  app.route('/lists/members/destroy')
    .post(twitterPost.listsMembersDestroy);

  app.route('/stream/user')
    .get(streamTwitterGet.user);

  app.route('/stream/statuses/filter')
    .get(streamTwitterGet.statusesFilter);

  module.exports = app;
}());
