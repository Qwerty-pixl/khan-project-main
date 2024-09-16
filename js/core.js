document.querySelectorAll('.menu-trigger, .hamburger').forEach(el => {
    el.addEventListener('click', function () {
        const menu = document.querySelector('.popup-menu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
});







document.addEventListener('DOMContentLoaded', function () {
    // Инициализация Swiper здесь
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // Количество видимых слайдов
        spaceBetween: 30, // Расстояние между слайдами
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // Количество слайдов на экранах до 768px
            },
            480: {
                slidesPerView: 1, // Количество слайдов на мобильных экранах
            }
        }
    });

});




document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = button.nextElementSibling;

        // Закрыть все другие открытые элементы
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
            }
        });

        // Переключение активного элемента
        accordionItem.classList.toggle('active');

        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});




// Add this to your JavaScript file

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});



function show_popap(id_popap) {
    var id = "#" + id_popap;
    $(id).addClass('active');
}

$(".close_popap").click(function () {
    $(".overlay").removeClass("active");
});














function toggleMenu() {
    var popup = document.getElementById("menuPopup");
    popup.classList.toggle("active");
}