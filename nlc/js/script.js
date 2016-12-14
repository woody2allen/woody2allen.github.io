$(function() {

    $('.slides-coachers ul').bxSlider({
        nextSelector: '.slides-coachers-next',
        prevSelector: '.slides-coachers-prev',
        nextText: '',
        prevText: '',
        pagerCustom: '.slides-coachers-pager',
        mode: "fade"
    });
});	

$(function() {	
    $('.slides-our-clients ul').bxSlider({
        nextSelector: '.slides-our-clients-next',
        prevSelector: '.slides-our-clients-prev',
        nextText: '',
        prevText: '',
        pagerCustom: '.slides-our-clients-pager',
        mode: "fade"
    });	

});

/* Accordion Faq */	
$(function() {
$('.iaccordion dt').on('click','a',function(e){ 
if($(e.delegateTarget).hasClass('ifag-active')){
 $(e.delegateTarget).removeClass('ifag-active').next('dd').css('display','none');
} 
else {
 $('dt.ifag-active').removeClass('ifag-active').next('dd').css('display','none');
 $(e.delegateTarget).addClass('ifag-active').next('dd').css('display','block');
} 
return false;
});		
}); 
	
	
/* Carousel Works */
$(function() {

 $('.works-slider ul').bxSlider({
  auto: true,
  captions: true,
  pager: false,
  minSlides: 2,
  maxSlides: 2,
  slideWidth: 370,
  slideMargin: 18,
  pause: 9000
 });

});
		