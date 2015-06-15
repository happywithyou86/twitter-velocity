(function() {
  'use strict';



  module.exports = function(app, io) {
    var routes_api_client = io.rootPath + 'back-end/api_use/client/';

    var use_api_client = {
        twitter : require(routes_api_client + 'twitter')
    };
    return useApi([{
      name: 'twitter',
      url: use_api_client.twitter
    }]);

    function useApi(param) {
      for (var key in param) {
       if (param.hasOwnProperty(key)) {
          var obj = param[key];
          app.use('/api_v1/' + obj.name, obj.url);
        }
      }
    }
  };

}());
