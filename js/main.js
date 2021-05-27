jQuery(document).ready(function($) {
  
  $('[data-lang]').select2({
    width: '55px'
  });
  //inputs check
  var label = [$("[data-input]").parent().find('label').text()];
  console.log(label);
  $("[data-input]").change(function(){
    $(this).each(function(){
      input = $(this).val().trim();
      if(input) {
        var parent = $(this).parent().index();
        console.log(parent);
        $(this).parent().find('label').text(label[parent]);
        console.log($(this).parent().eq($(this).index()).find('label').text(label[parent]));
      }
    });
  });
  $("[data-subm]").click(function(){
    $("[data-input]").each(function(){
      input = $(this).val().trim();
      if(!input) {
        $(this).parent().addClass('alert');
        $(this).parent().find('label').text('Ошибка заполнения');
        $(this).attr('placeholder','Обязательное поле')
      } else {
        $(this).parent().removeClass('alert');
      }
    })
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