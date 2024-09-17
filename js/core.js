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


















function toggleMenu() {
    var popup = document.getElementById("menuPopup");
    popup.classList.toggle("active");
}





// Функция для открытия попапа
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Функция для закрытия попапа
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    resetForm();
}

// Обработка отправки формы
document.getElementById('popupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Скрываем форму и показываем сообщение об успешной отправке
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
});

// Функция сброса формы
function resetForm() {
    document.getElementById('popupForm').reset();
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
}





