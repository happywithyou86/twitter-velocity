(function() {
  'use strict';

  exports.listsCreate = function(req, res, next) {
    var body = req.body;
    /**
     * Creating a new Lists.
     * @arg {string}{required} name - name of the Lists
     * @arg {string}{required} mode - 'public' or 'private'
     * @arg {string}{optional} description - description of the Lists
     */
    io.T(io).post('lists/create', {
      name        : body.name,
      mode        : body.mode,
      description : body.description || ''
    }, function(err, data, response) {
      if (err)  {return next(err);}

      res.json({
        message: 'Creating List of Lists',
        status: 200,
        data: data
      });
    });
  };

  exports.listsMembersCreate = function(req, res, next) {
    var body = req.body;
    /**
     * Creating a new member in the LISTS.
     * @arg {string}{required} slug - slug name of the Lists
     * @arg {string}{required} owner_screen_name - owner screen name of the Lists
     * @arg {string}{required} screen_name - the member name to be added in the Lists
     */
    io.T(io).post('lists/members/create', {
        slug: body.slug,
        owner_screen_name: body.owner_screen_name,
        screen_name: body.screen_name
      }, function(err, data, response) {
        if (err) {return next(err);}
        res.json({
          message : 'Creating a new Member in the Lists',
          status  : 200,
          data    : data
        });
      });
  };

  exports.listsMembersDestroy = function(req, res, next) {
    var body = req.body;
    /**
     * Destroying/Deleting a member in the LISTS.
     * @arg {string}{required} slug - slug name of the Lists
     * @arg {string}{required} owner_screen_name - owner screen name of the Lists
     * @arg {string}{required} screen_name - the member name to be added in the Lists
     */
    io.T(io).post('lists/members/destroy', {
        slug: body.slug,
        owner_screen_name: body.owner_screen_name,
        screen_name: body.screen_name
      }, function(err, data, response) {
        if (err) {return next(err);}
        res.json({
          message : 'Destroying/Deleting a Member in the Lists',
          status  : 200,
          data    : data
        });
      });
  };
}());
