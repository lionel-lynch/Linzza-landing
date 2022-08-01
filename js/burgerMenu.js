;(function() { // данный модуль отвечает за управление бургер меню

    const burgerBtn = document.querySelector('.header__burger .burger-button');
    const burgerClose = document.querySelector('.burger-menu__close');
    const burgerMenu = document.querySelector('.burger-menu');

    const toggleBurgerMenu = () => {
        burgerBtn.classList.toggle('burger-button--active');
        burgerMenu.classList.toggle('burger-menu--active');
    };

    burgerBtn.addEventListener('click', toggleBurgerMenu);
    burgerClose.addEventListener('click', toggleBurgerMenu);

})()