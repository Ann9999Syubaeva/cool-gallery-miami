// слайды
const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,

    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },

        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})

// задний фон
const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
})

sliderMain.controller.control = sliderBg 

// открытие картинки и закрытие всех лишних
document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
      // Закрываем все открытые картинки
      document.querySelectorAll('.slider__item.opened').forEach(openedItem => {
        openedItem.classList.remove('opened');
        event.stopPropagation(); // Остановка всплытия события
      });
  
      // Открываем только выбранную картинку
      item.classList.add('opened');
      event.stopPropagation(); // Остановка всплытия события
  });
  
    item.addEventListener('dblclick', event => {
        // Закрываем только выбранную картинку
        item.classList.remove('opened');
        event.stopPropagation(); // Остановка всплытия события
    });
});

// Закрываем открытую картинку при клике вне её
document.addEventListener('click', event => {
    if (!event.target.closest('.slider__item.opened')) {
      document.querySelectorAll('.slider__item.opened').forEach(openedItem => {
        openedItem.classList.remove('opened');
      });
    }
});

// Текст прячется
let desc = document.querySelector('.description')
sliderMain.on('slideChange', eleemnt => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})