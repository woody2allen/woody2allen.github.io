var $body, $window;

/*одинаковая высота колонок (инициируется ниже)*/
function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}

$(document).ready(function() {

  $('a[data-link]').on('click',function(e) {
    e.preventDefault();
    window.open($(this).data('link'));
  });


    function windowSize(){
        /*инициация одинаковой высоты колонок*/
        setEqualHeight($(".front-news-news-wrapper .fnews-item-title"));
        setEqualHeight($(".front-news-articles-wrapper .fnews-item-title"));
    }
    $(window).load(windowSize); 
    $(window).resize(windowSize);
    
  $('.gallery').each( function() {
    var item = $(this);
  
    item.find(".gallery__car__list ul li:first-child a").addClass("active");
    function cardslider(){
      var srcImg = item.find(".gallery__car__list").find(".active").attr("href");           
      function clicked(){
        item.find(".gallery__car__list li a").on("click", function(e){
          e.preventDefault();
          var preview = $(this);

          var bigImg = preview.data("big");
          item.find(".gallery__big a").attr("href", bigImg);
          
          preview.parent().siblings().find("a").removeClass("active");
          preview.addClass("active");

          srcImg = preview.attr("href");
          item.find(".gallery__big img").one("load", function(){                        
             $(this).hide().fadeIn(300);
          }).attr("src", srcImg);
          
        });
      }

      clicked();
    };

    cardslider();
  });


  $(".gallery__car__list").each(function() {
    var parent =  $(this).parents('.gallery'),
        next =  parent.find('.gallery__car__btn--next'),
        prev =  parent.find('.gallery__car__btn--prev');

    $(this).jCarouselLite({
      btnNext: next,
      btnPrev: prev,
      speed: 500,
      visible: 3,
      scroll: 3,
      circular:false,
      vertical:true
    });
  });


  function getCartGalleryList(list) {
    var galleryList = [];
    var link = list.find('li a');

    link.each(function() {
      var img_src = '';
      img_src = $(this).data("big");

      if ($(this).hasClass('active')) {
        galleryList.unshift({
          href: ''+img_src+'',
          title: link.find('img').attr("title")
        }); 
      } else {
        galleryList.push({
          href: ''+img_src+'',
          title: link.find('img').attr("title")
        }); 
      }

    });

    return galleryList;
  };

  $('.gallery__big a').on('click', function(e) {
    var self = $(this).parent().siblings('.gallery__car__list');
    console.log(self);
    e.preventDefault();
    $.fancybox(
      getCartGalleryList(self), 
      {
        padding :0
      }
    );
  });


  $('.js-price-accordion > p').on('click', function(e) {
    $(this).next('table').slideToggle(300);
    $(this).toggleClass('open');
  });
  


});

$(document).ready(function(){


  //map jk
 $(".section-jk-map__list__carousel ul li a").hover(function(){
    $(".section-jk-map__media .icon--marker").addClass("bounce");
  }, function(){
    $(".section-jk-map__media .icon--marker").removeClass("bounce");
  });

  $('.section-jk-map__list__carousel ul').bxSlider({    
    mode: 'vertical',
    minSlides: 14,
    maxSlides: 14,
    pager:false,
    infiniteLoop: false,
    hideControlOnEnd: true,
  });
 
  $('.js-builders-slider').bxSlider({
    infiniteLoop: false,
    minSlides: 5,
    maxSlides: 5,
    slideWidth: 150,
    pager: false,
    moveSlides: 5,
    hideControlOnEnd: true,
  });

  // end map jk

  $(".section-jk-map__list__carousel ul li").hover(function(){
      var ofleft = $(this).data("left");
      var oftop = $(this).data("top");
      $(this).parents(".section-jk-map").find(".icon--marker").css({
        left: ofleft,
        top: oftop
      });
  });



  $(".tabs" ).tabs();

  $(".vacancy-item__header").click(function(){
    $(this).toggleClass("vacancy-item__header--active");
    $(this).parent().find(".vacancy-item__content").slideToggle();    
  });

});

$(function() {
  $('body').on("click", '.yandexGoal', function(){
    yaCounter28361761.reachGoal($(this).data('target'));
  });

  $('.video-slider').bxSlider({
    pager:false
  });
  
  $('form.form-ajax').on('submit', function(){
    var error = false;
    var form = $(this);
    var formHidden = $('.form-content', form);
    var message = $('.form-message', form);

    if(message.length == 0){
      var message = $('.form-message', form.parent());
    }

    $('.required', form).removeClass('error');
    $('.required', form).each(function(){
      if($(this).val() == '') {
        error = true;
        $(this).addClass('error');
      }
    });

    if(!error){
      $.ajax({
        url: '/ajax/form',
        data: form.serializeArray(),
        success: function(data){
          if(data.success){
            $('input:not(:submit)', form).val('');
            $('textarea', form).val('');
            formHidden.hide();

            message.css('color', '#323232');
            message.html(data.msg);
          }
          else {
            message.css('color', '#ff0000');
            message.html(data.error);

          }
        },
        type: "POST", dataType: "json"
      });
    }
    else {
      message.css('color', '#ff0000');
      message.html('Заполните обязательные поля');
    }


    return false;
  });

  // $(".inline").colorbox({inline:true, width:"50%"});

  $('a').each(function()
  {
    var ts = $(this);
    if ($(this).attr('data-key'))
    {
      ts.attr('href', Base64.decode($(this).attr('data-key')));
      $(this).attr('data-key', '')
    }
  });

  /*$('a[rel="cbox"]').colorbox();*/
  $(".fancybox").fancybox({padding: 0});
  $('.cboxElement').fancybox({padding: 0});
  $('.cbox').fancybox({padding: 0});
  // $('.cboxElement').colorbox();
  // $('.cbox').colorbox();

  $('.row-slider-reviews__img a, .row-carousel a.fancybox').each(function() {
    console.log($(this).attr('rel'))
    if (!($(this).attr('rel'))) {
      $(this).attr('rel', 'fancybox');
    }
  });

  $('.video_prev').hover(function(){
    $(this).attr('src', '/img/vid1.jpg');
  }, function(){
    $(this).attr('src', '/img/vid.jpg');
  });

  if ( $('.youtube').length > 0 )
  {
    $(".youtube").fancybox({type:'iframe', padding: 0});
  }

  $('.calc-form').on('submit',  function(e)
  {
    var resultPrice = 0;
    if($('input[name="repair-type"]:checked').val() == 'Косметический'){
      resultPrice = resultPrice+2500;
      if($('input[name="ceiling-type"]:checked').val() == 'Штукатурка'){
        resultPrice = resultPrice+500;
      }
    }
    /**/
    if($('input[name="repair-type"]:checked').val() == 'Капитальный'){
      resultPrice = resultPrice+5500;
      if($('input[name="ceiling-type"]:checked').val() == 'Штукатурка'){
        resultPrice = resultPrice+250;
      }
      if($('input[name="ceiling-type"]:checked').val() == 'Гипсокартон'){
        resultPrice = resultPrice+500;
      }
      if($('input[name="wall-type"]:checked').val() == 'Покраска'){
        resultPrice = resultPrice+500;
      }
      if($('input[name="wall-type"]:checked').val() == 'Обои'){
        resultPrice = resultPrice+250;
      }
      if($('input[name="floor-type"]:checked').val() == 'Керамогранит'){
        resultPrice = resultPrice+250;
      }
    }
    /**/
    if($('input[name="repair-type"]:checked').val() == 'Премиум'){
      resultPrice = resultPrice+7500;
      if($('input[name="ceiling-type"]:checked').val() == 'Гипсокартон'){
        resultPrice = resultPrice+500;
      }
      if($('input[name="wall-type"]:checked').val() == 'Покраска'){
        resultPrice = resultPrice+250;
      }
      if($('input[name="wall-type"]:checked').val() == 'Венецианская штукатурка'){
        resultPrice = resultPrice+500;
      }
      if($('input[name="floor-type"]:checked').val() == 'Паркетная доска'){
        resultPrice = resultPrice+250;
      }
      if($('input[name="floor-type"]:checked').val() == 'Пробка'){
        resultPrice = resultPrice+500;
      }
    }
    /**/

    resultPrice = resultPrice*$('input[name="area"]').val();

    $('input[name="resultPrice"]').val(resultPrice);

    $(this).find('.cform').html('от '+number_format(parseInt(resultPrice), '', ' ', ' ')+' руб.');
    $('.cformOpen').show();

    /*
     $('.calcPop').bPopup({
     opacity: 0.7,
     closeClass: 'popup-close'
     });

     $('.popup-callback input[name=name]').focus();
     e.preventDefault();
     */
    return false;
  });

  $('.creset').click(function () {
    $('.cformOpen').hide();
    $('.cform').html('Узнать стоимость');
  });

  $('.cformOpen').click(function(){
    $('.calcPop').bPopup({
      opacity: 0.7,
      closeClass: 'popup-close'
    });

    $('.popup-callback input[name=name]').focus();
    e.preventDefault();
    return false;
  });


  $('.calcZam').on('submit',  function(e){


    $.post('/ajax/calc/', $('.calcZam,.calc-form').serialize(), function(data)
    {
      yaCounter28361761.reachGoal("zprice");
      $('.calcZam').html('Заявка успешно отправлена, спасибо.');
    });

    return false;
  });



  $('.recall').on('submit',  function(e){

    $.post('/ajax/recall/', $('.recall').serialize(), function(data)
    {
      $('.recall').html('Заявка успешно отправлена, спасибо.');
    });

    return false;
  });


  $('.form-post-question').on('submit',  function(e){

    var ts = $(this);

    $.post('/ajax/question/', $(this).serialize(), function(data)
    {
      ts.parent().html('Сообщение успешно отправлен, спасибо.');
    });

    return false;
  });


  $('.cform').click(function(){
    yaCounter28361761.reachGoal("stoimost");
  });




  $('.zamer').on('submit',  function(e){

    $.post('/ajax/recall/', $('.zamer').serialize(), function(data)
    {
      if (window.location.pathname == '/kontakty')
      {
        yaCounter28361761.reachGoal("kzamer");
      }
      else
      {
        yaCounter28361761.reachGoal("zamer");
      }

      $('.zamer').html('Заявка успешно отправлена, спасибо.');
    });

    return false;
  });

  $('a[rel="cbox"]').fancybox({padding: 0});
  // $('a[rel="cbox"]').colorbox();


  $body = $('body');
  $window = $(window);

  ie8_selectors();

  // $('.fport-slides').bxSlider({
  //   infiniteLoop: false,
  //   minSlides: 3,
  //   maxSlides: 3,
  //   slideWidth: 10000,
  //   pager: false,
  //   moveSlides: 1
  // });

  $('.b-carousel ul').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    // slideWidth: 10000,
    pager: false,
    moveSlides: 1
  });

  $('.b-slider-reviews ul').bxSlider({
    slideWidth: 1189,
    mode: 'fade',
    auto: true,
    pause: 4000
  });

  $('.front-slides').bxSlider({
    slideWidth: 1189,
    mode: 'fade',
    auto: true,
    pause: 4000
  });


  $('.pi-photo-slides').bxSlider({
    pager: false,
    slideWidth: 10000
  });

// K code
  $('.row-carousel ul').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 10000,
    pager: false,
    moveSlides: 3,
    slideMargin: 15,
  });

  $('.row-slider-reviews ul').bxSlider({
    // slideWidth: 1189,
    mode: 'fade',
    // auto: true,
    pause: 4000
  });

  $('.design-projects-slider').bxSlider({
    // slideWidth: 1189,
    mode: 'fade',
    // auto: true,
    pager: false,
    pause: 4000
  });

  $('.tk-prices-slider').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 200,
    pager: true,
    pagerType: 'short',
    moveSlides: 3,
    slideMargin: 25,
  });

//END K code


  init_fruler();

  update_floating_header();
  $window.scroll(update_floating_header);
  $window.resize(update_floating_header);

  $site_wrapper = $('.site-wrapper');

  $site_wrapper.css('min-height', $('.sidemenu').outerHeight() + $('.sidemenu-logo-container').outerHeight() + 'px');

  function update_sidemenu_height() {
    $('.sidemenu-panel').css('height', $('.site-wrapper').outerHeight());
  }

  update_sidemenu_height();
  $site_wrapper.imagesLoaded(update_sidemenu_height());

  update_side_menu();
  $window.scroll(update_side_menu);
  $window.resize(update_side_menu);

  fas_init();

  contact_page_scripts();

  $('.do-callback').click(function(e) {
    $('.popup-callback').bPopup({
      opacity: 0.7,
      closeClass: 'popup-close'
    });
    $('.popup-callback input[name=name]').focus();
    e.preventDefault();
  });

  $('.do-call').click(function(e) {
    $('.popup-call').bPopup({
      opacity: 0.7,
      closeClass: 'popup-close'
    });
    $('.popup-call input[name=name]').focus();
    e.preventDefault();
  });

  $('input[type=tel]').mask('+7 (999) 999-99-99', {
    autoclear: false
  });
});



/************************************************************
 /** СЛАЙДЕР В ФОРМЕ КАЛЬКУЛЯТОРА
 /************************************************************/

var fas_steps = [3, 25, 40, 60, 80, 100, 1000];

var fas_min = fas_steps[0],
    fas_max = fas_steps[fas_steps.length - 1];

var fas_step_ticks = 20;

function fas_value_to_ticks(value) {
  if (value < fas_min) {
    return 0;
  }

  for (var j = 1; j < fas_steps.length; ++j) {
    if (value <= fas_steps[j]) {
      var tick_value = (fas_steps[j] - fas_steps[j-1]) / fas_step_ticks;
      return fas_step_ticks * (j - 1) + (value - fas_steps[j-1]) / tick_value;
    }
  }

  return (fas_steps.length - 1) * fas_step_ticks;
}

function fas_ticks_to_value(ticks) {
  if (ticks < 0) {
    return fas_min;
  }

  var j = Math.floor(ticks / fas_step_ticks);
  if (j >= fas_steps.length - 1) {
    return fas_max;
  }

  var tick_value = (fas_steps[j+1] - fas_steps[j]) / fas_step_ticks;
  return fas_steps[j] + tick_value * (ticks % fas_step_ticks);
}

function fas_init() {
  var slider = $('.form-area-slider').slider({
    min: 0,
    max: fas_step_ticks * (fas_steps.length - 1),
    value: fas_value_to_ticks(+$('.form-input-area').val()),
    slide: function(event, ui) {
      $('.form-input-area').val(fas_ticks_to_value(ui.value))
    }
  });

  $('.form-input-area').on('change input', function() {
    var ticks = fas_value_to_ticks(+$('.form-input-area').val());
    slider.slider('value', ticks);
  });

  var $legend = $('.form-area-slider-legend');
  var legend_step_width = $legend.innerWidth() / (fas_steps.length - 1);
  for (var j = 0; j < fas_steps.length; ++j) {
    $legend_item = $('<span class="fas-legend-item">' + fas_steps[j] + '</span>').appendTo($legend);
    $legend_item.css('left', legend_step_width * j + 'px')
        .css('margin-left', -($legend_item.outerWidth() / 2) + 'px');
  }
}

/************************************************************
 /** ПЛАВАЮЩАЯ ПАНЕЛЬКА СЛЕВА
 /************************************************************/

var prev_sp = 0;

// переключает шапку между компактной и обычной
function update_floating_header(e) {
  var cur_sp = $window.scrollTop();

  var $header_menu = $('.header-menu');
  var treshld = 20;
  if (!$body.hasClass('header-compact') && cur_sp > treshld) {
    $header_menu.addClass('no-trans');
    $body.addClass('header-compact');
    setTimeout(function() {
      $header_menu.removeClass('no-trans');
    }, 500);
  } else if (cur_sp <= treshld) {
    $header_menu.addClass('no-trans');
    $body.removeClass('header-compact');
    setTimeout(function () {
      $header_menu.removeClass('no-trans');
    }, 500);
  }

  prev_sp = cur_sp;
}

function update_side_menu() {
  var $sidemenu = $('.sidemenu');
  var $sidemenu_cont = $('.sidemenu-container');
  var $logo_cont = $('.sidemenu-logo-container');

  var avail_height = $sidemenu_cont.outerHeight();
  var logo_collate = false;
  if ($logo_cont.offset().top < $sidemenu_cont.offset().top + $sidemenu_cont.outerHeight()) {
    avail_height -= $sidemenu_cont.offset().top + $sidemenu_cont.outerHeight() - $logo_cont.offset().top;
    logo_collate = true;
  }

  if (logo_collate && $sidemenu.outerHeight() > avail_height) {
//    console.log(avail_height + ' vs ' + $sidemenu.outerHeight());
    $sidemenu.css('margin-top', avail_height - $sidemenu.outerHeight() + 'px');
  } else {
    $sidemenu.css('margin-top', 0);
  }

  var min_height = $('.sidemenu').outerHeight() + $('.sidemenu-logo-container').outerHeight() -
      $('.site-footer-wrapper').outerHeight();
  $('.site-content-wrapper').css('min-height', min_height);
  $('.sidemenu-container').css('max-height', $('.site-wrapper').innerHeight());
}

//************************************************************
/** ЛИНЕЙКА В БЛОКЕ "КАК МЫ РАБОТАЕМ"
 /************************************************************/

var fr_min_pos = 75, fr_max_pos = 724;
var fr_step = (fr_max_pos - fr_min_pos) / 5;
var fr_cur = 0;
var fr_steps = [fr_min_pos,
  fr_min_pos + fr_step,
  fr_min_pos + fr_step * 2,
  fr_min_pos + fr_step * 3,
  fr_min_pos + fr_step * 4,
  fr_min_pos + fr_step * 5];

function init_fruler() {
  fruler_set(0);

  // когда юзер щелкает по бэкграунду линейки, мы определяем, справа или слева от ползунка
  // это произошло, в зависимости от результата увеличиваем или уменьшаем значение на единицу
  var cooldown = false;

  $('.fruler-cont').click(function(e) {
    if (cooldown) {
      return;
    } else {
      cooldown = true;
      setTimeout(function() {
        cooldown = false;
      }, 200);
    }

    var ruler_left = $(this).offset().left; // левый край фона линейки относительно документа
    var pos = $('.fruler-handle').offset().left - $('.fruler-cont').offset().left; // текущая позиция ползунка в
                                                                                   // пикселях (относительно фона линейки)
    var pos_b = pos + $('.fruler-handle').outerWidth(); // правый край ползунка

    if (e.clientX - ruler_left < pos) { // если щелчок слева от ползунка
      if (fr_cur > 0) {
        fruler_set(fr_cur - 1);
      }
    } else if (e.clientX - ruler_left > pos_b) { // если щелчок справа от ползунка
      if (fr_cur < 5) {
        fruler_set(fr_cur + 1);
      }
    }
  });

  // инициализируем ползунок [JQueryUI::Draggable]
  var ufb;
  $('.fruler-handle').draggable({
    axis: 'x',
    grid: [fr_step, 0],
    containment: $('.fruler-cont'),
    start: function() {
      $('.fruler-cont' +'').addClass('no-trans');

      ufb = setInterval(fruler_update_bg, 10);
      cooldown = true;
    }, stop: function() {
      clearInterval(ufb);
      ufb = undefined;
      $('.fruler-cont').removeClass('no-trans');
      setTimeout(function() {
        cooldown = false
      }, 200);
    }, drag: function() {
      fruler_detect_value();
      fruler_on_value_change();
    }
  });
}

// определяет значение ползунка по его текущей позиции
function fruler_detect_value() {
  var current_x = $('.fruler-handle').offset().left - $('.fruler-cont').offset().left; // позиция ползунка относительно родителя

  if (current_x <= fr_min_pos) {
    fr_cur = 0;
    return;
  } else if (current_x >= fr_max_pos) {
    fr_cur = 5;
    return;
  }

  for (var j = 0; j < fr_steps.length; ++j) {
    var fr_value = fr_steps[j];
    if (fr_value - 50 <= current_x && current_x <= fr_value + 50) {
      fr_cur = j;
      return;
    }
  }
}

// устанавливает новое значение линейки
function fruler_set(new_cur) {
  fr_cur = new_cur;
  var pos = fr_min_pos + fr_cur * fr_step;

  $('.fruler-handle').css('left', pos + 'px');

  fruler_update_bg(pos);
  fruler_on_value_change();
}

// двигает фон линейки
function fruler_update_bg(new_pos) {
  var pos = new_pos == undefined ? $('.fruler-handle').offset().left - $('.fruler-cont').offset().left : new_pos;

  if (fr_cur == 5) {
    $('.fruler-bg').css('width', '100%');
  } else {
    $('.fruler-bg').css('width', pos + 20 + 'px');
  }
}

// обновляет шаги, когда значение линейки изменилось
function fruler_on_value_change() {
  $('.fruler-steps > li').removeClass('passed').slice(0, fr_cur).addClass('passed');

  $('.fruler__tabs > .fruler-cont__text').siblings().removeClass('fruler-cont__text--active').eq(fr_cur).addClass('fruler-cont__text--active');
}


/************************************************************
 /** КАРТЫ НА СТРАНИЦЕ КОНТАКТОВ
 /************************************************************/

function contact_page_scripts() {
  if ($('.contacts-maps').length == 0)
    return;

  var y_map, g_map;
  var active_map = 'yandex';

  function init_yandex() {
    if (y_map == undefined) {
      ymaps.ready(function() {
        y_map = new ymaps.Map('js-map-yandex', {
          center: [55.5764671025472,37.47836116577404],
          zoom: 14
        });
        y_map.behaviors.disable('scrollZoom');

        var placemark = new ymaps.Placemark([55.5764671025472,37.47836116577404], {
          balloonContent: 'Строительная компания "Новая Москва"'
        });
        y_map.geoObjects.add(placemark);
      });
    }
  }

  function init_google() {
    if (g_map == undefined) {
      g_map = new google.maps.Map(document.getElementById("js-map-google"), {
        zoom: 14,
        center: new google.maps.LatLng(55.5764671025472,37.47836116577404),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
      });

      var coords = new google.maps.LatLng(55.5764671025472,37.47836116577404);
      new google.maps.Marker({
        position: coords,
        map: g_map,
        title: 'Страховой дом Химки'
      });
    }
  }

  function activate_map(map) {
    if (map == 'yandex') {
      $('#js-map-google').css('display', 'none');
      $('#js-map-yandex').css('display', 'block');
      $('.contacts-map-tab-yandex').addClass('active');
      $('.contacts-map-tab-google').removeClass('active');
      init_yandex();
      active_map = 'yandex';
    } else if (map == 'google') {
      $('#js-map-yandex').css('display', 'none');
      $('#js-map-google').css('display', 'block');
      $('.contacts-map-tab-google').addClass('active');
      $('.contacts-map-tab-yandex').removeClass('active');
      init_google();
      active_map = 'google';
    }
  }

  activate_map('yandex');

  $('.contacts-map-tab-yandex').click(function(e) {
    activate_map('yandex');
    e.preventDefault();
  });

  $('.contacts-map-tab-google').click(function(e) {
    activate_map('google');
    e.preventDefault();
  });
}

function number_format( number, decimals, dec_point, thousands_sep )
{

  var i, j, kw, kd, km;


  if( isNaN(decimals = Math.abs(decimals)) ){
    decimals = 2;
  }
  if( dec_point == undefined ){
    dec_point = ",";
  }
  if( thousands_sep == undefined ){
    thousands_sep = ".";
  }

  i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

  if( (j = i.length) > 3 ){
    j = j % 3;
  } else{
    j = 0;
  }

  km = (j ? i.substr(0, j) + thousands_sep : "");
  kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);

  kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


  return km + kw + kd;
}

/************************************************************
 /** IE8
 /************************************************************/

function ie8_selectors() {
  if ((document.documentMode || 100) < 9) {
    $('.portfolio-inside-item:nth-child(3n)').addClass('nth-child-3n');
    $('.article table tr:nth-child(2n)').addClass('nth-child-2n');
    $('.article table tr:nth-child(2n-1)').addClass('nth-child-2n-1');
    $('.breadcrumbs > li:last-child').addClass('last-child');

    $('input[type=radio]:checked, input[type=checkbox]:checked').addClass('checked');
    $('input[type=radio], input[type=checkbox]').change(function() {
      console.log('checked');
      var $this = $(this);
      var name = $this.attr('name');
      $('input[name="' + name + '"]').each(function() {
        console.log('iterated');
        $(this).toggleClass('checked', $(this).is(':checked'));
      });
    });
  }
}