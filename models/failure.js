var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var failureSchema = new Schema({
   name: { type: String }
});

module.exports = mongoose.model('Failure', failureSchema);