"use strict";

var goods = [{
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

var renderGoodsItem = function renderGoodsItem(item) {
  return "<div class=\"goods-item\">\n    <img src=\"img/".concat(item.img, "\">\n    <h3>").concat(item.title, "</h3>\n    <p>").concat(item.price, " \u20BD</p>\n    <button>\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n    </div>");
};

var renderGoodsList = function renderGoodsList(list) {
  var goodsList = list.map(function (item) {
    return renderGoodsItem(item);
  });
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);