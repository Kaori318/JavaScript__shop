"use strict";

var express = require('express');

var fs = require('fs');

var router = express.Router();

var handler = require('./handler');

router.get('/', function (req, res) {
  fs.readFile('server/db/userCart.json', 'utf-8', function (err, data) {
    if (err) {
      res.sendStatus(404, JSON.stringify({
        result: 0,
        text: err
      }));
    } else {
      res.send(data);
    }
  });
});
router.post('/', function (req, res) {
  handler(req, res, 'add', 'server/db/userCart.json');
});
router.put('/:id', function (req, res) {
  handler(req, res, 'change', 'server/db/userCart.json');
});
router["delete"]('/:id', function (req, res) {
  handler(req, res, 'remove', 'server/db/userCart.json');
});
router["delete"]('/:id', function (req, res) {
  handler(req, res, 'DELETE', 'server/db/userCart.json');
});
module.exports = router;