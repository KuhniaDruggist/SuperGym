'use strict';

// Слайдер тренеров

(function () {
  var sectionTrainers = document.querySelector('.trainers');
  var sliderTrainers = sectionTrainers.querySelector('.slider');

  if (!sectionTrainers.classList.contains('only-js')) {
    sectionTrainers.classList.add('only-js');
  }

  if (sliderTrainers) {
    sliderTrainers = new window.Swiper(sliderTrainers, {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
      slideClass: 'slider__item',
      wrapperClass: 'slider__list',
      navigation: {
        nextEl: '.trainers__button--next',
        prevEl: '.trainers__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40
        },
        1311: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        }
      }
    });
  }
})();
