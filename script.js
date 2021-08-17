const goods = [
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
  
  