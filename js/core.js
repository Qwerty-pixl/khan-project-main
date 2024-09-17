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




let currentIndex = 0;
let isAnimating = false;
const pages = document.querySelectorAll('.block-container .page, .block-container .pages');
const totalPages = pages.length;

window.addEventListener('scroll', () => {
    const container = document.querySelector('.block-container');
    const containerTop = container.getBoundingClientRect().top;

    // Если контейнер по центру экрана
    if (containerTop <= window.innerHeight / 2 && containerTop >= -window.innerHeight / 2 && !isAnimating) {
        document.body.classList.add('scroll-stop');
        startAnimation();
    }
});

function startAnimation() {
    isAnimating = true;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % totalPages;
        pages.forEach((page, index) => {
            const offset = index - currentIndex;
            page.style.transform = `translateX(${offset * 100}vw)`;
        });

        if (currentIndex === totalPages - 1) {
            stopAnimation();
        } else {
            setTimeout(startAnimation, 1000); // задержка между перелистываниями
        }
    }, 1000);
}

function stopAnimation() {
    isAnimating = false;
    document.body.classList.remove('scroll-stop');
}














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







let items = document.querySelectorAll('.slid .item');
let active = 3;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}