"use strict";

var API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
var app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
    showCart: false,
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    cartItems: [],
    filtered: [],
    imgCart: 'https://via.placeholder.com/50x70',
    products: [],
    imgProduct: 'https://via.placeholder.com/200x150'
  },
  methods: {
    getJson: function getJson(url) {
      return fetch(url).then(function (result) {
        return result.json();
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    addProduct: function addProduct(item) {
      var _this = this;

      this.getJson("".concat(API, "/addToBasket.json")).then(function (data) {
        if (data.result === 1) {
          var find = _this.cartItems.find(function (el) {
            return el.id_product === item.id_product;
          });

          if (find) {
            find.quantity++;
          } else {
            var prod = Object.assign({
              quantity: 1
            }, item);

            _this.cartItems.push(prod);
          }
        }
      });
    },
    remove: function remove(item) {
      var _this2 = this;

      this.getJson("".concat(API, "/addToBasket.json")).then(function (data) {
        if (data.result === 1) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            _this2.cartItems.splice(_this2.cartItems.indexOf(item), 1);
          }
        }
      });
    },
    filter: function filter() {
      var regexp = new RegExp(this.userSearch, 'i');
      this.filtered = this.filtered.filter(function (el) {
        return regexp.test(el.product_name);
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.getJson("".concat(API + this.cartUrl)).then(function (data) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data.contents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          _this3.cartItems.push(item);

          console.log(item.price);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    this.getJson("".concat(API + this.catalogUrl)).then(function (data) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          _this3.products.push(item);

          _this3.filtered.push(item);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    });
    this.getJson("getProducts.json").then(function (data) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;

          _this3.filtered.push(item);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    });
  }
});