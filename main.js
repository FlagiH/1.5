// var mySwiper = new Swiper ('.swiper-container', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 'auto',
  allowTouchMove: true, 
  // Responsive breakpoints
  breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   // when window width is >= 480px
    768: {
      enabled: false
    },
  //   // when window width is >= 640px
  //   1120: {
  //     slidesPerView: 4,
  //     spaceBetween: 32
  //   }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
})



