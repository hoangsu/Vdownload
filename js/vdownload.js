$(document).ready(function() {
	$('.home-slider').flexslider({
		animation: "slide",
		controlNav: "thumbnails",
		directionNav:false
	});
	$("a.viewmore").click(function() {
		$(this).hide();
		$(this).prev('ul').css('max-height', 'none');
		$(this).next('.viewless').show();
	});
	$("a.viewless").click(function() {
		$(this).hide();
		$(this).parent().children('ul').css('max-height', '403px');
		$(this).prev('.viewmore').show();
	});
	$("#closepop").click(function(event) {
		$(this).parent().parent("#pop-app").hide('slow');
	});
	$('.pop-app-slider').flexslider({
		animation: "slide",
		controlNav: false,
		slideshow: false

	});
	$(".inline").colorbox({inline:true, width:"40%"});
});
