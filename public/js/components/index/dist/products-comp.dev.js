"use strict";

Vue.component('products', {
  data: function data() {
    return {
      catalogUrl: '/catalogData.json',
      filtered: [],
      products: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.getJson("/api/products").then(function (data) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          //item.imgPath = `img/${item.id_product}.jpg`;
          _this.$data.products.push(item);

          _this.$data.filtered.push(item);
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
    filter: function filter(userSearch) {
      var regexp = new RegExp(userSearch, 'i');
      this.filtered = this.products.filter(function (el) {
        return regexp.test(el.product_name);
      });
    }
  },
  template: "<section class=\"Fetured_Items\">\n   <div class=\"container\">\n       <div class=\"Fetured_Items__header\">\n           <h2>Fetured Items</h2>\n           <p class=\"text\">Shop for items based on what we featured in this week</p>\n       </div>\n        <div class=\"Fetured_Items__card-box card-box\">\n                <product v-for=\"item of filtered\" \n                :key=\"item.id_product\" \n                :product=\"item\"\n                @add-product=\"$parent.$refs.cart.addProduct\"></product>\n                </div>\n                <a href=\"catalog.html\" class=\"Fetured_Items__button\">Browse All Product</a>\n               </div>\n        </section>"
});
Vue.component('product', {
  props: ['product'],
  template: "\n            <article class=\"Fetured_Items__card card\">\n                <div class=\"card__img\">\n                    <img :src=\"product.img_product\" alt=\"photo\">\n                </div>\n                <div class=\"overlay\">\n                    <button class=\"overlay__button\" @click=\"$emit('add-product', product)\"><img src=\"img/Vector_card.svg\" alt=\"\"><span>Add to Cart</span></button>\n                </div>\n                <div class=\"card__text\">\n                    <a href=\"product.html\"><h4>{{product.product_name.toUpperCase()}}</h4></a>\n                    <p>{{product.description}}</p>\n                </div>\n                    <strong>$ {{product.price}}.99</strong>\n                \n            </div>\n    "
});