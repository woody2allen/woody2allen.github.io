//Меню мобильной версии
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$( document ).ready(function() {

	//Скрипт формы поиска
    $(".search-icon").click(function() {
      $(".second-menu__items").toggleClass( "hide" );
      $(".search-form__input").toggleClass( "highlight" );
    });

    //Скрипты для слайдеров и каруселей
    $('.order-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  appendArrows: $(".order-arrows"),
	  asNavFor: '.order-thumb'
	});
	$('.order-thumb').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.order-slider',
	  dots: false,
	  focusOnSelect: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$('.carousel-items').slick({
	  dots: false,
	  infinite: false,
	  arrows: true,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$('.partner-slider').slick({
	  dots: false,
	  infinite: false,
	  arrows: true,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$('.document-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.document-text'
	});
	$('.document-text').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.document-slider',
	  dots: false,
	  focusOnSelect: true
	});
	$('.thumb-text').mouseover(function(){
	  $(this).click();
	});

	$('.gallery-items').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  appendArrows: $(".gallery-arrows"),
	  asNavFor: '.gallery-thumb, .gallery-number'
	});
	$('.gallery-thumb').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.gallery-items, .gallery-number',
	  dots: false,
	  focusOnSelect: true
	});
	$('.gallery-number').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.gallery-thumb, .gallery-items',
	  dots: false,
	  fade: true,
	  focusOnSelect: true
	});
	$('.gallery-thumb').click(function(){
	  $('.gallery-number').click();
	});

	//Скрипт главного слайдера
	$(function(){
	  $("#container1").twentytwenty({
	  	default_offset_pct: 0.3,
	  	no_overlay: true
	  });
	});

		//Функции эффектов
		function odomShow() {
			setTimeout(function(){
			    odometer.innerHTML = 250;
			}, 100);
		}

		function effect1() {
			setTimeout(function(){
		        $('#effect1').addClass('effect-boxRoom');
		    },400);
		}

		function show2() {
			setTimeout(function(){
		        $('#show2').addClass('animated bounceIn');
		    },400);
		}

		function show3() {
			setTimeout(function(){
		        $('#show3').addClass('animated bounceIn');
		    },800);
		}

		function show4() {
			setTimeout(function(){
		        $('#show4').addClass('animated bounceIn');
		    },1200);
		}

		function effect2() {
			setTimeout(function(){
		        $('#effect2').addClass('effect-boxRoom');
		    },400);
		}

		function planTextShow() {
			setTimeout(function(){
		        $('#planText2').addClass('animated bounceInLeft');
		    },300);
		}

		function plan1() {
			setTimeout(function(){
		        $('#plan1').addClass('animated bounceInRight');
		    },600);
		}

		function plan2() {
			setTimeout(function(){
		        $('#plan2').addClass('animated bounceInRight');
		    },900);
		}

		function plan3() {
			setTimeout(function(){
		        $('#plan3').addClass('animated bounceInRight');
		    },1200);
		}

		function plan4() {
			setTimeout(function(){
		        $('#plan4').addClass('animated bounceInRight');
		    },1400);
		}

		function plan5() {
			setTimeout(function(){
		        $('#plan5').addClass('animated bounceInRight');
		    },1700);
		}

		function plan6() {
			setTimeout(function(){
		        $('#plan6').addClass('animated bounceInRight');
		    },2000);
		}

		function plan7() {
			setTimeout(function(){
		        $('#plan7').addClass('animated bounceInRight');
		    },2300);
		}

		function plan8() {
			setTimeout(function(){
		        $('#plan8').addClass('animated bounceInRight');
		    },2600);
		}

		function plan9() {
			setTimeout(function(){
		        $('#plan9').addClass('animated bounceInRight');
		    },2900);
		}

		function plan10() {
			setTimeout(function(){
		        $('#plan10').addClass('animated bounceInRight');
		    },3200);
		}

		function plan11() {
			setTimeout(function(){
		        $('#plan11').addClass('animated bounceInRight');
		    },3500);
		}

		function plan12() {
			setTimeout(function(){
		        $('#plan12').addClass('animated bounceInRight');
		    },3800);
		}

		function service2() {
			setTimeout(function(){
		        $('#service10').addClass('animated fadeInRight');
		    },200);
		}

		function service3() {
			setTimeout(function(){
		        $('#service2').addClass('animated fadeInLeft');
		    },400);
		}

		function service4() {
			setTimeout(function(){
		        $('#service8').addClass('animated fadeInRight');
		    },600);
		}

		function service5() {
			setTimeout(function(){
		        $('#service12').addClass('animated fadeInLeft');
		    },800);
		}

		function service6() {
			setTimeout(function(){
		        $('#service3').addClass('animated fadeInRight');
		    },1000);
		}

		function service7() {
			setTimeout(function(){
		        $('#service9').addClass('animated fadeInLeft');
		    },1200);
		}

		function service8() {
			setTimeout(function(){
		        $('#service5').addClass('animated fadeInRight');
		    },1400);
		}

		function service9() {
			setTimeout(function(){
		        $('#service7').addClass('animated fadeInLeft');
		    },1600);
		}

		function service10() {
			setTimeout(function(){
		        $('#service11').addClass('animated fadeInRight');
		    },1800);
		}

		function service11() {
			setTimeout(function(){
		        $('#service6').addClass('animated fadeInLeft');
		    },2000);
		}

		function service12() {
			setTimeout(function(){
		        $('#service4').addClass('animated fadeInRight');
		    },2200);
		}

	//Запуск эффектов
	function pageEffects() {
		if ($(document).width() > 500) {
			$(document).scroll(function(){
		        if($(this).scrollTop() >= $('.slider').offset().top - 50) {
		            $('#mainSliderText').addClass('animated bounceInLeft');
		        }

		        if($(this).scrollTop() >= $('.section-1').offset().top - 400) {
		        	odomShow();
					$('#show1').addClass('animated bounceIn');
		            effect1();
		            show2();
		            show3();
		            show4();
		        }

		        if($(this).scrollTop() >= $('#section-3').offset().top -400) {
		            $('#effect3').addClass('effect-boxRoom');
		        }

		        if($(this).scrollTop() >= $('.section-5').offset().top - 400) {
		        	effect2();
		            $('#planText1').addClass('animated bounceInLeft');
		            planTextShow();
		            plan1();
		            plan2();
		            plan3();
		            plan4();
		            plan5();
		            plan6();
		            plan7();
		            plan8();
		            plan9();
		            plan10();
		            plan11();
		            plan12();
		        }

		        if($(this).scrollTop() >= $('.section-6').offset().top - 300) {
		            $('.map-head').addClass('move');
		        }

		        if($(this).scrollTop() >= $('.section-7').offset().top -400) {
		            $('#effect4').addClass('effect-boxRoom');
		        }

		        if($(this).scrollTop() >= $('#section-33').offset().top -400) {
		            $('#effect5').addClass('effect-boxRoom');
		        }

		        if($(this).scrollTop() >= $('.section-11').offset().top - 400) {
		            $('#service1').addClass('animated fadeInLeft');
		            service2();
		            service3();
		            service4();
		            service5();
		            service6();
		            service7();
		            service8();
		            service9();
		            service10();
		            service11();
		            service12();
		        }
		    });
		}
	}

	pageEffects();

	$( window ).resize(function() {
        pageEffects();      
    });

});