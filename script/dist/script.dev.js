"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductList =
/*#__PURE__*/
function () {
  function ProductList() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.products';

    _classCallCheck(this, ProductList);

    this.container = container;
    this.goods = [];

    this._fetchProducts();

    this.render(); //вывод товаров на страницу
  }

  _createClass(ProductList, [{
    key: "_fetchProducts",
    value: function _fetchProducts() {
      this.goods = [{
        title: 'Shirt',
        price: 150,
        img: 'Shirt.jpg'
      }, {
        title: 'Socks',
        price: 50,
        img: 'Socks.jpg'
      }, {
        title: 'Jacket',
        price: 350,
        img: 'Jacket.jpg'
      }, {
        title: 'Shoes',
        price: 250,
        img: 'Shoes.jpg'
      }];
    }
  }, {
    key: "getSum",
    value: function getSum() {
      var sum = 0;
      this.goods.forEach(function (item) {
        return sum += item.price;
      });
      console.log(sum);
    }
  }, {
    key: "render",
    value: function render() {
      var block = document.querySelector(this.container);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.goods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var product = _step.value;
          var item = new ProductItem(product);
          block.insertAdjacentHTML("beforeend", item.render()); //           block.innerHTML += item.render();
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
    }
  }]);

  return ProductList;
}();

var ProductItem =
/*#__PURE__*/
function () {
  function ProductItem(product) {
    _classCallCheck(this, ProductItem);

    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = product.img;
  }

  _createClass(ProductItem, [{
    key: "render",
    value: function render() {
      return "<div class=\"product-item\">\n                <img src=\"img/".concat(this.img, "\">\n                <h3>").concat(this.title, "</h3>\n                <p>").concat(this.price, " \u20BD</p>\n                <button>\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n            </div>");
    }
  }]);

  return ProductItem;
}();

var Cart =
/*#__PURE__*/
function () {
  function Cart() {
    _classCallCheck(this, Cart);
  }

  _createClass(Cart, [{
    key: "addGoods",
    value: function addGoods() {}
  }, {
    key: "removeGoods",
    value: function removeGoods() {}
  }, {
    key: "render",
    value: function render() {}
  }]);

  return Cart;
}();

var CartItem =
/*#__PURE__*/
function () {
  function CartItem() {
    _classCallCheck(this, CartItem);
  }

  _createClass(CartItem, [{
    key: "render",
    value: function render() {}
  }]);

  return CartItem;
}();

var list = new ProductList();
list.getSum(); //1 homework

/* const goods = [
    { title: 'Shirt', price: 150, img: 'Shirt.jpg'},
    { title: 'Socks', price: 50, img: 'Socks.jpg'},
    { title: 'Jacket', price: 350, img: 'Jacket.jpg'},
    { title: 'Shoes', price: 250, img: 'Shoes.jpg'},
  ];

  const renderGoodsItem = item =>{
    return `<div class="goods-item">
    <img src="img/${item.img}">
    <h3>${item.title}</h3>
    <p>${item.price} ₽</p>
    <button>В корзину</button>
    </div>`;
  };

  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }

  renderGoodsList(goods);
 */