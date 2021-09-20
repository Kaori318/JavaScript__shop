"use strict";

// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
Vue.component('cart', {
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

      this.$parent.getJson("".concat(API, "/addToBasket.json")).then(function (data) {
        if (data.result === 1) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            _this3.cartItems.splice(_this3.cartItems.indexOf(item), 1);
          }
        }
      });
    }
  },
  template: "\n<div>\n    <div class=\"header__item header__item-hidden\" @click=\"showCart = !showCart\">\n        <img src=\"img/icons/cart.svg\"\n        alt=\"cart\"><span class=\"count\">{{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }}</span>\n    </div>\n    \n\n    <div class=\"cart-block\" v-show=\"showCart\">\n    <h2 v-if=\"cartItems.length===0\">\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430</h2>\n    <div v-else >\n        <div class=\"cart-block__head\">\n            <h3> \u041C\u043E\u044F \u043A\u043E\u0440\u0437\u0438\u043D\u0430 ({{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }})</h3>\n            <p class=\"btnInCart\" @click=\"cartItems=[]\">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443</p>\n        </div>\n        <hr>\n        <cart-item v-for=\"(item,index) of cartItems\" :key=\"item.id_product\"  :cart-item=\"item\" :cart-count = \"cartCount\"\n        :cart-summ = \"cartSumm\" @remove=\"remove\" @add-product=\"addProduct\">\n        </cart-item>\n        <hr>\n        <div class=\"cart-block__bottom\">\n            <button>\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437</button>\n            <h2>\u0412\u0441\u0435\u0433\u043E: {{ this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0) }} $</h2>\n        </div>\n    </div>  \n</div>\n    "
});
Vue.component('cart-item', {
  props: ['cartItem'],
  template: "\n    <div class=\"cart-item\">\n        \n        <div class=\"product-desc\">\n            <img class=\"cartImg\" :src=\"cartItem.img_product\"  alt=\"Some img\">\n            <h3>{{ cartItem.product_name }}</h3>\n        </div>\n        <div>\n            <p>{{ cartItem.price * cartItem.quantity }}$</p>\n        </div>\n        <div class=\"changeQuantity\">\n            <p class=\"del-btn btnInCart\" @click=\"$emit('remove', cartItem)\"> - </p>\n            <p>{{ cartItem.quantity }}</p>\n            <p class=\"btnInCart\" @click=\"$emit('add-product', cartItem)\"> + </p>\n        </div> \n        <div class=\"del-btn btnInCart\" @click=\"$emit('remove', cartItem)\"> &times; </div>         \n    </div>\n    "
});