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
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  speed: 700,
  nav: true,
  navPosition: "bottom",
  controls: false
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

// Использование jQuery для tabs
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.content').removeClass('content_active').eq($(this).index()).addClass('content_active');
});

function toggleSlide(classItem) {
  $(classItem).each(function(i){
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__descr-list').eq(i).toggleClass('catalog-item__descr-list_active');
  });
  });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

