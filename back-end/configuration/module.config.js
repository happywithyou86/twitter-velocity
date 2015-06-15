(function() {
  'use strict';

  var path      = require('path'),
      mongoose  = require('mongoose'),
      Promise   = require('bluebird'),
      rootPath  = path.normalize(__dirname + '/../../'),
      service   = '../services/';

  module.exports = {

    rootPath          : rootPath,
    clusterService    : require(service + './cluster'),
    config            : require('./settings.config'),
    use_api           : require('./use_api.config'),
    mongoDB           : require('./mongodb'),
    T                 : require('./twitSetup'),

    /***********************
     *     MODELS         *
    ***********************/
    List              : require('../model/List'),

    /***********************
     *     Twiiter        *
    ***********************/

    bodyParser        : require('body-parser'),
    chalk             : require('chalk'),
    cluster           : require('cluster'),
    compression       : require('compression'),
    express           : require('express'),
    logger            : require('morgan'),
    methodOverride    : require('method-override'),
    moment            : require('moment'),
    mongoose          : Promise.promisifyAll(mongoose),
    multer            : require('multer'),
    numCPUs           : require('os').cpus().length,
    twit              : require('twit'),
    url               : require('url'),
    util              : require('util'),

    port              : process.env.PORT || 3005,
    environment       : process.env.NODE_ENV || 'development'
  };
}());
