;(function() { // данный модуль устанавливает в футере текущую дату

    window.addEventListener('load', () => {
        const footerDate = document.querySelector('.footer__copyright');
        footerDate.textContent = `© 2000-${(new Date()).getFullYear()}, Все права защищены`;
    });

})()