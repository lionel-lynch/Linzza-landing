;(function() {

    // логика по скроллингу страницы из главной навигации и из бургер меню
    window.addEventListener('load', () => {
        const mainNavList = document.querySelector('.header__nav-list');
        const burgerNavList = document.querySelector('.burger-menu__list');

        const about = document.querySelector('.header-about');
        const advantages = document.querySelector('.advantages');
        const contacts = document.querySelector('.contact-form');

        // будем по значению атрибута, совпадающего с ключом в объекте получать нужную секцию для прокрутки
        const sectionOffsets = {
            'about': about,
            'advantages': advantages,
            'contacts': contacts
        };

        // скроллит страницу до указанной в параметре секции
        const scrollPage = (section) => {
            scrollTo({
                behavior: 'smooth',
                top: window.pageYOffset + sectionOffsets[section].getBoundingClientRect().top
            });
        };

        mainNavList.addEventListener('click', (evt) => {
            const navListItem = evt.target.closest('.header__nav-item');

            if (!navListItem) {
                return;
            }

            scrollPage(navListItem.getAttribute('data-section'));
        });

        burgerNavList.addEventListener('click', (evt) => {
            const navListItem = evt.target.closest('.burger-menu__item');

            if (!navListItem) {
                return;
            }

            scrollPage(navListItem.getAttribute('data-section'));
        });
    });

})()