(function(window, document) {
  // console.log(($(document).scrollTop()));
  $(document).scroll(function() {
    var scrollVal = $(this).scrollTop();
    if (scrollVal > 0) {
      $(".header").addClass("hiddenHead");
      $(".down-menu").addClass("showHead");
    } else {
      $(".header").removeClass("hiddenHead");
      $(".down-menu").removeClass("showHead");
    }
});
	$('.new-items-box-img').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $(".new-items-arrows")
        });

        $('.main-slider__items').slick({
            autoplay: true,
            dots: true,
            arrows: true,
            appendArrows: $(".arrows-box"),
            appendDots: $(".dots-box")
        });

        $('.sertificate-items').slick({
            autoplay: true,
            dots: true,
            arrows: true,
            appendArrows: $(".srt-arrows-box"),
            appendDots: $(".srt-dots-box")
        });

        $('.new-items-box').each(function (){
          var wrap = $(this),
              slider = wrap.find('.new-items-box-img-box'),
              arrowsWrap = wrap.find('.new-items-arrows');

          slider.slick({
            // autoplay: true,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: arrowsWrap
          });
        });

        if ($(document).width() > 1800 ) {
          $('.about-items').slick({
            // autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $(".about-arrows-box"),
            appendDots: $(".about-dots-box")
          });
        } else if ($(document).width() > 1000) {
          $('.about-items').slick({
            // autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $(".about-arrows-box"),
            appendDots: $(".about-dots-box")
          });
        } else if ($(document).width() > 500) {
            $('.about-items').slick({
            // autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            appendArrows: $(".about-arrows-box"),
            appendDots: $(".about-dots-box")
          });
        } else {
          $('.about-items').slick({
            // autoplay: true,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $(".about-arrows-box"),
            appendDots: $(".about-dots-box")
          });
        }

        if ($(document).width() > 800 ) {
          
          $('.news-slide').slick({
            // autoplay: true,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            appendArrows: $(".news-arrows")
          });
          $('.projects-items').slick({
            // autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            appendArrows: $(".pro-arrows-box"),
            appendDots: $(".pro-dots-box")
          });
          $('.realize-items').slick({
            // autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            appendArrows: $(".pro-arrows-box"),
            appendDots: $(".pro-dots-box")
          });
        } else if ($(document).width() > 500) {
          $('.news-slide').slick({
            // autoplay: true,
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            appendArrows: $(".news-arrows")
          });
          $('.projects-items').slick({
            // autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            appendArrows: $(".pro-arrows-box"),
            appendDots: $(".pro-dots-box")
          });
          $('.realize-items').slick({
            // autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            appendArrows: $(".pro-arrows-box"),
            appendDots: $(".pro-dots-box")
          });
        } else {
          $('.news-slide').slick({
            // autoplay: true,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $(".news-arrows")
          });
          $('.projects-items').slick({
            // autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $(".pro-arrows-box"),
            appendDots: $(".pro-dots-box")
          });
          $('.realize-items').slick({
            // autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $(".pro-arrows-box"),
            appendDots: $(".pro-dots-box")
          });
        }

        $( function() {
          $( "#accordion" ).accordion({
            collapsible: true
          });
        } ); 

        $( function() {
          $( "#accordion2" ).accordion({
            collapsible: true
          });
        } );

        $( function() {
          $( "#accordion3" ).accordion({
            collapsible: true
          });
        } );

        $( function() {
          $( "#accordion4" ).accordion({
            collapsible: true
          });
        } );

        $( function() {
          $( "#accordion5" ).accordion({
            collapsible: true
          });
        } );

        $( function() {
          $( "#accordion6" ).accordion({
            collapsible: true
          });
        } );

        $( function() {
          $( "#accordionSecond" ).accordion({
            collapsible: true
          });
        } );

        $( function() {
          $( "#accordionThirt" ).accordion({
            collapsible: true
          });
        } );

        $( function() {
          $( "#tabs" ).tabs();
        } );

})(window, document);

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    function openNav2() {
        document.getElementById("mySidenav2").style.width = "100%";
    }

    function closeNav2() {
        document.getElementById("mySidenav2").style.width = "0";
    }
$( document ).ready(function() {
        $('.grid').masonry({
          // options
          itemSelector: '.grid-item',
          columnWidth: 370,
          horizontalOrder: true,
          gutter: 15
        });

        $('.gallery').masonry({
          // options
          itemSelector: '.gallery-item',
          columnWidth: 360,
          // horizontalOrder: true,
          gutter: 25
        });

        $('input[type=tel]').mask('+7 (999) 999-99-99', {
          autoclear: false
        });
});

function withoutCyr(input) {
    var value = input.value;
    var re = /а|б|в|г|д|е|ё|ж|з|и|ё|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я/gi;
    if (re.test(value)) {
        value = value.replace(re, '');
        input.value = value;
    }
}