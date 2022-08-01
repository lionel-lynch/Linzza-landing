;(function() { // данный модуль отвечает за анимацию контента (по дизайну)

    window.addEventListener('load', () => {
        // будем анимировать стрелочку на форме при её появлении
        const contactFormArrow = document.querySelector('.contact-form__invite .invite-arrow__icon'); 

        const animateWhenAppears = (elem, animateClass) => {
            const animItemHeight = elem.offsetHeight;
            const animItemOffset = elem.getBoundingClientRect().top + window.pageYOffset;
            const animStart = 100;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            // добавить элементу класс с анимацией если он попал во viewport
            if (window.pageYOffset > (animItemOffset + 40) - animItemPoint && window.pageYOffset < animItemOffset + animItemHeight) {
                elem.classList.add(animateClass);
            } else {
                elem.classList.remove(animateClass);
            }
        }
    
        window.addEventListener('scroll', () => {
            animateWhenAppears(contactFormArrow, 'invite-arrow--slide');
        });

        animateWhenAppears(contactFormArrow, 'invite-arrow--slide'); // вызываем функцию сразу же т.к. страница изначально может быть проскролена до элемента
    });
    
})()