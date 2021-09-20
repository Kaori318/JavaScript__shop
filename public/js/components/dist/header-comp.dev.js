"use strict";

Vue.component('header-comp', {
  data: function data() {
    return {
      showMenu: false,
      showCart: false
    };
  },
  template: "\n    <header class=\"header\">\n        <div class=\"container header__wrap\">\n            <div class=\"header__left\">\n                <div class=\"header__logo\" href=\"index.html\">\n                    <img src=\"img/icons/logo.svg\" alt=\"logo\">\n                </div>\n                <search></search>\n            </div>\n            <div class=\"header__right\">\n                <input type=\"checkbox\" id=\"burger\">\n                <label class=\"header__item\" for=\"burger\">\n                    <img src=\"img/icons/menu.svg\" alt=\"menu\">\n                </label>\n                <menu></menu>\n                <div class=\"contact\">\n                    <a class=\"header__item header__item-hidden\" href=\"registration.html\"><img src=\"img/icons/contact.svg\" alt=\"contact\"></a>\n                </div>\n                <div>\n                    <div class=\"header__item header__item-hidden\" @click=\"showCart = !showCart\">\n                        <img src=\"img/icons/cart.svg\" alt=\"cart\">\n                        <span class=\"count\">{{ $root.$refs.cart.sumCartItem }}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>"
}); //<span class="count">{{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }}</span>