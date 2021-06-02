jQuery(document).ready(function($) {
  
  $('[data-lang]').select2({
    width: '55px'
  });
  //search 
  $('[data-search]').click(function(){
    $(this).next().addClass('viewed');
    $('body').toggleClass('open');
  })

  //miss click
  function closeSearch () {
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("[data-sline]"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('[data-search]').next().removeClass('viewed');
        $('body').removeClass('open');
      }
    });
  };

  closeSearch();
  //servicepage
  $('[data-service]').click(function(){
    $(this).toggleClass('opened');
  })
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
  if (jQuery('[data-review]').length > 0) {
      $('[data-review]').slick({
          dots: false,
          speed: 300,
          slidesToShow: 1,
          rows: 2,
          // responsive: [{
          //     breakpoint: 768,
          //     settings: {
          //         slidesToShow: 1
          //     }
          // }, ]
      });
  }

  if (jQuery('[data-example]').length > 0) {
    
    $('[data-example]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        infinite: false,
        // responsive: [{
        //     breakpoint: 768,
        //     settings: {
        //         slidesToShow: 1
        //     }
        // }, ]
    });
    $('[data-zoom]').click(function(){
      var current = $(this).parent().find('.slick-current .example__img').attr('href'),
          fancy = $(this).parent().find('.slick-current .example__img').attr('data-fancybox');
      $(this).attr('href', current);
      $(this).attr('data-fancybox',fancy);
    });
}
  // showmore
  $("[data-revtxt]").shorten({
    "showChars" : 420,
    "moreText"  : "Читать дальше",
    "lessText"  : "Скрыть",
  });
  
//   // faq
  if (jQuery('[data-faq]').length > 0) {
      $('[data-faq]').click(function() {
        
        var faqHeight = $(this).find('.faq__item').outerHeight(true);
        if ($(this).hasClass('open')) {
          $(this).css({'height': 'auto'});
          $(this).find('.faq__answer').slideUp(300);
          $(this).removeClass('open');
        } else {
          $(this).addClass('open').siblings().removeClass('open');
          $(this).css({'height': faqHeight});
          $('[data-faq]').find('.faq__answer').hide();
          $(this).find('.faq__answer').slideDown(300);
        };
        
      })
  }
//   // burger
//   $('[data-burger]').click(function() {
//       $('html').toggleClass("open");
//       $(this).toggleClass("open");
//       $('[data-nav]').toggleClass("open");
//       $('body').toggleClass('open');
//   });
  
  // adaptive

});