class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            { title: 'Shirt', price: 150, img: 'Shirt.jpg'},
            { title: 'Socks', price: 50, img: 'Socks.jpg'},
            { title: 'Jacket', price: 350, img: 'Jacket.jpg'},
            { title: 'Shoes', price: 250, img: 'Shoes.jpg'},
        ];
    }

    getSum(){
        let sum = 0;
        this.goods.forEach(item => sum += item.price);
        console.log(sum);
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render(){
           return `<div class="product-item">
                <img src="img/${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price} ₽</p>
                <button>В корзину</button>
            </div>`
    }
}

class Cart{
    addGoods(){
    }

    removeGoods(){
    }

    render(){
    }
}
class CartItem{
    render(){
    }
}

let list = new ProductList();
list.getSum()


//1 homework
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