Vue.component('header-menu', {
    template:`
    <div>
        <input type="checkbox" id="burger">
        <label class="header__item" for="burger">
            <img src="img/icons/menu.svg" alt="menu">
        </label>
        <nav class="header__nav nav">
            <div class="nav__wrap">
                <label class="nav__close" for="burger"><img src="img/icons/burger_close.svg" alt="close"></label>
                <h2 class="nav__title">MENU</h2>
                <h3 class="nav__heading">MAN</h3>
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" class="nav__link">Accessories</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Bags</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Denim</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">T-Shirts</a>
                    </li>
                </ul>

                <h3 class="nav__heading">WOMAN</h3>
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" class="nav__link">Accessories</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Jackets & Coats</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Polos</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">T-Shirts</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Shirts</a>
                    </li>
                </ul>

                <h3 class="nav__heading">KIDS</h3>
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" class="nav__link">Accessories</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Jackets & Coats</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Polos</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">T-Shirts</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Shirts</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Bags</a>
                    </li>
                </ul>
                    <a href="registration.html">
                    <h2 class="nav__title nav__hidden">CONTACT</h2>
                    </a>
                    <a href="cart.html">
                    <h2 class="nav__title nav__hidden">CART</h2>
                    </a>
            </div>
        </nav>
    </div>`
});
