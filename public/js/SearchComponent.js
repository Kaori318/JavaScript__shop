Vue.component('search', {
    data(){
        return {
          userSearch: '',
          showSearch:false
        }
      },
    template: `
    <div class="search"> 
    <div @click="showSearch = !showSearch"><img src="img/icons/search.svg" alt="search"></div>
    <form action="#" v-show="showSearch" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                    <input type="text" placeholder="поиск" class="search-field" v-model="userSearch">
                    <button type="submit" class="btn-search">
                        <i class="fas fa-search"></i>
                    </button>
                </form></div></div>`

})