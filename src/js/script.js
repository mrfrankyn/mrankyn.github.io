// Использование библиотеки "slick"
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 800,
//         adaptiveHeight: false,
//         prevArrow: `<button type="button" class="slick-prev"><img src="icons/left.svg"></button>`,
//         nextArrow: `<button type="button" class="slick-next"><img src="icons/right.svg"></button>`,
//         responsive: [
//           {
//             breakpoint: 992,
//             settings: {
//               arrows: false,
//               dots: true
//             }
//           }
//         ]
//       });
// });

// Использование tiny-slider
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page', 
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  speed: 700,
  nav: false,
  controls: false
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});