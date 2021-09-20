"use strict";

var cart = require('./cart');

var fs = require('fs');

var actions = {
  add: cart.add,
  change: cart.change,
  remove: cart.remove,
  "delete": cart.deleteItem
};

var handler = function handler(req, res, action, file) {
  fs.readFile(file, 'utf-8', function (err, data) {
    if (err) {
      res.sendStatus(404, JSON.stringify({
        result: 0,
        text: err
      }));
    } else {
      var newCart = actions[action](JSON.parse(data), req);
      fs.writeFile(file, newCart, function (err) {
        if (err) {
          res.sendStatus(404, JSON.stringify({
            result: 0,
            text: err
          }));
        } else {
          res.send(JSON.stringify({
            result: 1
          }));
        }
      });
    }
  });
};

module.exports = handler;