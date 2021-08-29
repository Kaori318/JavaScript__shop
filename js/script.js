const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = [...data];
                 this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }

    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}
class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} ₽</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class Cart {
    constructor(container = '.cart-block'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this.order = null;
        this.numberGoods = null;
        this._clickCart();
        
        this._getCartItem()
            .then(data => { //data - объект js
                 this.goods = [...data.contents];
                 this.render();
                 this.clearCart();
            this.numberOfGoods();
            this.orderPrice()
            });
            
        }

        _clickCart(){
            document.querySelector('.btn-cart').addEventListener('click', () => {document.querySelector(this.container).classList.toggle('hidden');
        });
         }
         
            _getCartItem(){
                return fetch(`${API}/getBasket.json`)
                    .then(result => result.json())
                    .catch(error => {
                        console.log(error);
                    })
            }
            render(){
            const block = document.querySelector(this.container);
            const blockGoods = document.querySelector(`${this.container}__goods`);
            if(this.goods.length){
                for (let product of this.goods){
                    const cartObj = new CartItem(product);
        //            this.allProducts.push(productObj);
                    blockGoods.insertAdjacentHTML('beforeend',cartObj.render());
                }} else {
                block.textContent = 'Корзина пуста';
            }
    }

    clearCart() {
        document.querySelector('.clear-cart').addEventListener('click', () => {
        this.goods = [];
        this.render();
        } )
    }

    numberOfGoods() {
        for(let i = 0; i< this.goods.length; i++){
            this.numberGoods += this.goods[i].quantity}
        document.querySelector('.numberGoodsCart').insertAdjacentHTML('beforeend', this.numberGoods);
    }

    orderPrice() {
        for(let i = 0; i< this.goods.length; i++){
            this.order += (this.goods[i].price *  this.goods[i].quantity)}
        document.querySelector('.cart-block__order-price').insertAdjacentHTML('beforeend', `Всего: ${this.order} ₽`);
    }
}  
class CartItem{
    constructor(product, img = 'https://via.placeholder.com/30x40'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
        this.quantity = product.quantity;
    }
    render(){
        return `<div class="cart-item" data-id="${this.id}">
        <div> <img src="${this.img}" alt="Some img"></div>
        <div><h3>${this.title}</h3></div>
        <div><p>${this.price} ₽</p></div>
        <div>
            <span>-</span>
            <span>${this.quantity}</span>
            <span>+</span>
        </div>
        <div class="closed">&#10006;</div>
        </div>`
    }
}



let list = new ProductsList();
let list2 = new Cart();

