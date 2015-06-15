(function() {
  'use strict';

  exports.listShow = function(req, res, next) {
    var query = io.url.parse(req.url, true).query;

    /**
     * Used for Getting the total number of members in the Lists.
     * @arg {string}{required} slug - slug name of the Lists
     * @arg {string}{required} owner_screen_name - owner screen name of the Lists
     */
    io.T(io)
      .get('lists/show', {
        slug: query.slug,
        owner_screen_name: query.owner_screen_name
      }, function(err, data, response) {
        if (err) {return next(err);}
        res.json({
          message : 'Retrieving the total number of members in the Lists',
          status  : 200,
          data    : data.member_count
        });
      });
  };
}());
