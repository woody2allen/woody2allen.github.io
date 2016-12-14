$(document).ready(function() {
	$("a.transition").click(function(event){
		$("body").fadeOut(1000);
		$("body").fadeIn(1000);
		var link = $(this).attr("href");
		setTimeout(function(){
			location = link;
		},1000);
		event.preventDefault();
	});

});


$(function() {
var $root = $('html, body');
    $('.slow a').click(function() {
        var href = $(this).attr("href");
        $root.animate({
            scrollTop: $(href).offset().top
        }, 700, function () {
            window.location.hash = href;
        });
        return false;
    });
});


$(function ($) {
    var mainMENU  = $('.slow'),
        mMoT       = mainMENU[0].offsetTop;
    $(window).scroll(function (e) {
  if (window.scrollY > mMoT) {
   mainMENU.addClass('scroll');
  } else {
   mainMENU.removeClass('scroll');
  }
 });
//masterwind
});
