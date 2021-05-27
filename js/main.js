jQuery(document).ready(function($) {
  
  $('[data-lang]').select2({
    width: '55px'
  });
  //inputs check
  var label = $("[data-input]").parent().find('label span').each(function() {$(this).text()})
  var labelNews = $("[data-inputnews]").parent().find('label span').each(function() {$(this).text()})
  
  $("[data-input]").change(function (){
    $(this).each(function(){
      input = $(this).val();
      var parent = $(this).parent().index();
      if(input) {
        $(this).parent().find('label').html(label[parent]);
        $(this).parent().removeClass('alert');
        $(this).parent().find('label').addClass('checked')
      } else {
        $(this).attr('placeholder','');
        $(this).parent().find('label').removeClass('checked')
      }
    });
  });
  $("[data-inputnews]").change(function (){
    $(this).each(function(){
      input = $(this).val();
      var parent = $(this).parent().index();
      if(input) {
        $(this).parent().find('label').html(labelNews[parent]);
        $(this).parent().removeClass('alert');
        $(this).parent().find('label').addClass('checked')
      } else {
        $(this).attr('placeholder','');
        $(this).parent().find('label').removeClass('checked')
      }
    });
  });
  $('.quest__inp-wrap > select').change(function(){
    $(this).parent().find('label').addClass('checked');
    $(this).parent().addClass('checked');
  })
  function requ(){
    input = $(this).val();
    if(!input) {
      $(this).parent().addClass('alert');
      $(this).parent().find('label').text('Ошибка заполнения');
      $(this).attr('placeholder','Обязательное поле')
    } else {
      $(this).parent().removeClass('alert');
      $(this).attr('placeholder','')
    }
  };
  $("[data-subm]").click(function(){
    $("[data-input]").each(requ);
    $("[data-text]").each(requ);
    $("[data-select]").each(requ);
  });
  $("[data-submnews]").click(function(){
    $("[data-inputnews]").each(requ);
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