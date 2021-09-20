"use strict";

var _Vue$component;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
Vue.component('cart', (_Vue$component = {
  data: function data() {
    return {
      cartUrl: '/getBasket.json',
      cartItems: [],
      showCart: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.getJson("/api/cart").then(function (data) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data.contents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          _this.$data.cartItems.push(item);
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
  },
  methods: {
    addProduct: function addProduct(item) {
      var _this2 = this;

      var find = this.cartItems.find(function (el) {
        return el.id_product === item.id_product;
      });

      if (find) {
        this.$parent.putJson("/api/cart/".concat(find.id_product), {
          quantity: 1
        }).then(function (data) {
          if (data.result === 1) {
            find.quantity++;
          }
        });
      } else {
        var prod = Object.assign({
          quantity: 1
        }, item);
        this.$parent.postJson("/api/cart", prod).then(function (data) {
          if (data.result === 1) {
            _this2.cartItems.push(prod);
          }
        });
      }
    },
    remove: function remove(item) {
      var _this3 = this;

      var find = this.cartItems.find(function (el) {
        return el.id_product === item.id_product;
      });

      if (item.quantity > 1) {
        this.$parent.putJson("/api/cart/".concat(find.id_product), {
          quantity: -1
        }).then(function (data) {
          if (data.result) {
            item.quantity--;
          }
        });
      } else {
        this.$parent.delJson("/api/cart/".concat(find.id_product), item).then(function (data) {
          if (data.result) {
            _this3.cartItems.splice(_this3.cartItems.indexOf(item), 1);
          } else {
            console.log('error');
          }
        });
      }
    },
    deleteItem: function deleteItem(item) {
      var _this4 = this;

      /*   let find = this.cartItems.find(el => el.id_product === item.id_product); */
      this.$parent.delJson("/api/cart/".concat(item.id_product), item).then(function (data) {
        if (data.result) {
          _this4.cartItems.splice(_this4.cartItems.indexOf(item), 1);
        } else {
          console.log('error');
        }
      });
    }
  }
}, _defineProperty(_Vue$component, "mounted", function mounted() {
  var _this5 = this;

  this.$parent.getJson("/api/cart").then(function (data) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = data.contents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var el = _step2.value;

        _this5.cartItems.push(el);
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
}), _defineProperty(_Vue$component, "template", "\n<div>\n    <div class=\"header__item header__item-hidden\" @click=\"showCart = !showCart\">\n        <img src=\"img/icons/cart.svg\"\n        alt=\"cart\"><span class=\"count\">{{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }}</span>\n    </div>\n    \n\n    <div class=\"cart-block\" v-show=\"showCart\">\n    <h2 v-if=\"cartItems.length===0\">\u0421art is empty</h2>\n    <div v-else >\n        <div class=\"cart-block__head\">\n            <h3> My cart ({{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }})</h3>\n            <p class=\"btnInCart\" @click=\"cartItems=[]\">Empty cart</p>\n        </div>\n        <hr>\n        <cart-item v-for=\"(item,index) of cartItems\" :key=\"item.id_product\"  :cart-item=\"item\" :cart-count = \"cartCount\"\n         @remove=\"remove\" @add-product=\"addProduct\"\n        @del = \"deleteItem\">\n        </cart-item>\n        <hr>\n        <div class=\"cart-block__bottom\">\n            <button>Cart</button>\n            <h2>\n            Total score {{ this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0) }} $</h2>\n        </div>\n    </div>  \n</div>\n    "), _Vue$component));
Vue.component('cart-item', {
  props: ['cartItem'],
  template: "\n    <div class=\"cart-item\">\n        \n        <div class=\"product-desc\">\n            <img class=\"cartImg\" :src=\"cartItem.img_product\"  alt=\"Some img\">\n            <h3>{{ cartItem.product_name }}</h3>\n        </div>\n        <div>\n            <p>{{ cartItem.price * cartItem.quantity }}$</p>\n        </div>\n        <div class=\"changeQuantity\">\n            <p class=\"del-btn btnInCart\" @click=\"$emit('remove', cartItem)\"> - </p>\n            <p>{{ cartItem.quantity }}</p>\n            <p class=\"btnInCart\" @click=\"$emit('add-product', cartItem)\"> + </p>\n        </div> \n        <div class=\"del-btn btnInCart\" @click=\"$emit('del', cartItem)\"> &times; </div>         \n    </div>\n    "
});