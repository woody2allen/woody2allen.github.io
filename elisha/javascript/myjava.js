$(document).ready(function(){
		var h = jQuery(window).height();
		jQuery(window).scroll(function() {
			if ( ($(this).scrollTop()+h) >= $(".middle-content").offset().top + 300) {
				$(".middle-content").addClass('animated fadeInLeft');
				$(".middle-content").css({visibility:"visible"});
			}
			if ( ($(this).scrollTop()+h) >= $(".down-content").offset().top + 300) {
				$(".left-side").addClass('animated fadeInLeft');
				$(".left-side").css({visibility:"visible"});
				$(".right-side").addClass('animated fadeInRight');
				$(".right-side").css({visibility:"visible"});
			}
			if ( ($(this).scrollTop()+h) >= $(".article-box").offset().top + 300) {
				$(".thirt-article").addClass('animated fadeInLeft');
				$(".thirt-article").css({visibility:"visible"});
				$(".thirt-article").animate({opacity: 1 }, 700);
				$(".thirt-article").queue(function () {            // добавим новую функцию в очередь
			        $(".second-article").addClass('animated fadeInLeft');
			        $(".second-article").css({visibility:"visible"}); 
			        $(".second-article").animate({opacity: 1 }, 700);        // добавим класс элементу, за счет чего он изменит цвет
			        $(".second-article").queue(function () {            // добавим новую функцию в очередь
					        $(".first-article").addClass('animated fadeInLeft');
					        $(".first-article").css({visibility:"visible"}); 
					        $(".first-article").animate({opacity: 1 }, 700);        // добавим класс элементу, за счет чего он изменит цвет
					        	$(this).dequeue();                    // ! продолжим очередь !
					      });                  // ! продолжим очередь !
			      });

			}
		})
});
