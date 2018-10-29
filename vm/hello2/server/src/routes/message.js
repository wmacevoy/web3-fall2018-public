var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = require('../models/Message.js');

/* GET ALL MESSAGES */
router.get('/', function(req, res, next) {
  Message.find(function (err, ans) {
    if (err) return next(err);
    res.json(ans);
  });
});

/* SAVE MESSAGE */
router.post('/', function(req, res, next) {
  Message.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
