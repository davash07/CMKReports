var mongoose = require('mongoose');
var model = require('../models/failure');
var Failure = mongoose.model('Failure');

//GET - Return all registers
exports.findAll = function(req, res){
    Failure.find(function(err, failures){
        if(err) res.send(500, err.message);
        console.log('GET /failures')
        res.status(200).jsonp(failures);
    });
};

//GET - Return a register with specified ID
//export.findById = function(req, res){
//    Profile.findById(req.params.id, function(err, failure){
//        if(err) return res.send(500, err.message);
//        console.log('GET /profiles' + req.params.id);
//        res.status(200).jsonp(profile);
//    })
//};

//POST - Insert a new register
//exports.add = function(req, res) {
// console.log('POST');
// console.log(req.body);
// var client = new Client({
// name: req.body.name,
// email: req.body.email,
// genre: req.body.genre
// });
// client.save(function(err, client) {
// if(err) return res.send(500, err.message);
// res.status(200).jsonp(client);
// });
//};