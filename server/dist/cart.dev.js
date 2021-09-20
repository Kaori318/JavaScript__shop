"use strict";

var add = function add(cart, req) {
  cart.contents.push(req.body);
  return JSON.stringify(cart, null, 4);
};

var change = function change(cart, req) {
  var find = cart.contents.find(function (el) {
    return el.id_product === +req.params.id;
  });
  find.quantity += req.body.quantity;
  return JSON.stringify(cart, null, 4);
};

var remove = function remove(cart, req) {
  var find = cart.contents.find(function (el) {
    return +el.id_product === req.body.id_product;
  });

  if (find.quantity > 1) {
    find.quantity -= 1;
  } else {
    cart.contents.splice(cart.contents.indexOf(find), 1);
  }

  return JSON.stringify(cart, null, 4);
};

var DELETE = function DELETE(cart, req) {
  var find = cart.contents.find(function (el) {
    return +el.id_product === req.body.id_product;
  });
  cart.contents.splice(cart.contents.indexOf(find), 1);
  return JSON.stringify(cart, null, 4);
};

module.exports = {
  add: add,
  change: change,
  remove: remove,
  DELETE: DELETE
};