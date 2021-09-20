Vue.component('products', {
   data(){
       return {
           catalogUrl: '/catalogData.json',
           filtered: [],
           products: [],
       }
   },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    //item.imgPath = `img/${item.id_product}.jpg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
                let regexp = new RegExp(userSearch, 'i');
                this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },

   template: `<section class="Fetured_Items">
   <div class="container">
       <div class="Fetured_Items__header">
           <h2>Fetured Items</h2>
           <p class="text">Shop for items based on what we featured in this week</p>
       </div>
        <div class="Fetured_Items__card-box card-box">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
                </div>
                <a href="catalog.html" class="Fetured_Items__button">Browse All Product</a>
               </div>
        </section>`
});

Vue.component('product', {
    props: ['product'],
    template: `
            <article class="Fetured_Items__card card">
                <div class="card__img">
                    <img :src="product.img_product" alt="photo">
                </div>
                <div class="overlay">
                    <button class="overlay__button" @click="$emit('add-product', product)"><img src="img/Vector_card.svg" alt=""><span>Add to Cart</span></button>
                </div>
                <div class="card__text">
                    <a href="product.html"><h4>{{product.product_name.toUpperCase()}}</h4></a>
                    <p>{{product.description}}</p>
                </div>
                    <strong>$ {{product.price}}.99</strong>
                
            </div>
    `
})