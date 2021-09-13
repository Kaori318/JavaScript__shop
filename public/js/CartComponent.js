// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('cart', {
    data(){
      return {
          cartUrl: '/getBasket.json',
          cartItems: [],
          showCart: false
      }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    this.$data.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }
        },
        remove(item){
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })    
    }
    },

    template: `
<div>
    <div class="header__item header__item-hidden" @click="showCart = !showCart">
        <img src="img/icons/cart.svg"
        alt="cart"><span class="count">{{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }}</span>
    </div>
    

    <div class="cart-block" v-show="showCart">
    <h2 v-if="cartItems.length===0">Корзина пуста</h2>
    <div v-else >
        <div class="cart-block__head">
            <h3> Моя корзина ({{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }})</h3>
            <p class="btnInCart" @click="cartItems=[]">Очистить корзину</p>
        </div>
        <hr>
        <cart-item v-for="(item,index) of cartItems" :key="item.id_product"  :cart-item="item" :cart-count = "cartCount"
        :cart-summ = "cartSumm" @remove="remove" @add-product="addProduct">
        </cart-item>
        <hr>
        <div class="cart-block__bottom">
            <button>Оформить заказ</button>
            <h2>Всего: {{ this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0) }} $</h2>
        </div>
    </div>  
</div>
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div class="cart-item">
        
        <div class="product-desc">
            <img class="cartImg" :src="cartItem.img_product"  alt="Some img">
            <h3>{{ cartItem.product_name }}</h3>
        </div>
        <div>
            <p>{{ cartItem.price * cartItem.quantity }}$</p>
        </div>
        <div class="changeQuantity">
            <p class="del-btn btnInCart" @click="$emit('remove', cartItem)"> - </p>
            <p>{{ cartItem.quantity }}</p>
            <p class="btnInCart" @click="$emit('add-product', cartItem)"> + </p>
        </div> 
        <div class="del-btn btnInCart" @click="$emit('remove', cartItem)"> &times; </div>         
    </div>
    `
})