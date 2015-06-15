(function() {
  'use strict';

var mongoose = require('mongoose');

 /*******************
  * Twitter Schema
 *******************/
var ListSchema = new mongoose.Schema({
  name : String,
  owner : String,
  createdAt  : {type : Date, default : Date.now},
  id_list : [String]
});


ListSchema.pre('remove', function (next) {
  next();
});

/************
 * Statics
************/
ListSchema.statics = {
/*******************
 * Find seed by id
 * @param {ObjectId} id
 * @param {Function} cb
 * @api private
*******************/

  load: function (id, cb) {
    this.findOne({ _id : id })
      .exec(cb);
  }

  /**************************
   * List seeds
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
  *************************/
};

  module.exports = mongoose.model('List', ListSchema);
}());
