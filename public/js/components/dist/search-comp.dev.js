"use strict";

Vue.component('search', {
  data: function data() {
    return {
      userSearch: '',
      showSearch: false
    };
  },
  template: "\n  <div class=\"search\"> \n      <div @click=\"showSearch = !showSearch\">\n          <img src=\"img/icons/search.svg\" alt=\"search\">\n      </div>\n      <form action=\"#\" v-show=\"showSearch\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n          <input type=\"text\" placeholder=\"\u043F\u043E\u0438\u0441\u043A\" class=\"search-field\" v-model=\"userSearch\">\n          <button type=\"submit\" class=\"btn-search\">\n              <i class=\"fas fa-search\"></i>\n          </button>\n      </form>\n  </div>"
});