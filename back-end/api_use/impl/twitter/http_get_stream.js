(function() {
  'use strict';

  exports.statusesFilter = function(req, res, next) {
    /**
     * Used for streaming status of users in our Lists of members.
     * @arg {array}{required} follow - lists of users to follow in the stream
     */
    var stream = io.T(io).stream('statuses/filter', {follow: '15872418, 2227396045'});/*sample id of users*/
    stream.on('tweet', function(response) {
      var object = {
        message : 'Retrieving Stream for Statuses/filter',
        status  : 200,
        data    : response
      };
      /*show the depth of response*/
      console.log(io.util.inspect(object, {
        showHidden: false,
        depth: null}
      ));
    });
  };

  exports.user = function(req, res, next) {
    var stream = io.T(io).stream('user');
    /**
     * Used for streaming of the authenticated user.
     */
    stream.on('tweet', function(response) {
      console.log({
        message : 'Retrieving Stream for User',
        status  : 200,
        data    : response
      });
    });
  };
}());
