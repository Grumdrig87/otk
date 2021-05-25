jQuery(document).ready(function($) {
  
  $('[data-lang]').select2({
    width: '55px'
  });
  //tabs
//   $('[data-can]').on('click', function() {
//       $(this).addClass('active').siblings().removeClass('active').closest('.can__wrap').find('ul.can__list').removeClass('active').eq($(this).index()).addClass('active');
//   });
  
//   //slider
//   if (jQuery('[data-writers]').length > 0) {
//       $('[data-writers]').slick({
//           dots: true,
//           speed: 300,
//           slidesToShow: 2,
//           responsive: [{
//               breakpoint: 768,
//               settings: {
//                   slidesToShow: 1
//               }
//           }, ]
//       });
//   }
  
  
//   // faq
//   if (jQuery('[data-faq]').length > 0) {
//       $('[data-faq]').click(function() {
//           $(this).find('.faq__title').toggleClass('open');
//           $(this).find('p').slideToggle(300);
//       })
//   }
//   // burger
//   $('[data-burger]').click(function() {
//       $('html').toggleClass("open");
//       $(this).toggleClass("open");
//       $('[data-nav]').toggleClass("open");
//       $('body').toggleClass('open');
//   });
  
  // adaptive

});