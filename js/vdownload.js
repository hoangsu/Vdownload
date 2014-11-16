$(document).ready(function() {
	$('.home-slider').flexslider({
		animation: "slide",
		controlNav: "thumbnails",
		directionNav:false
	});
	viewMoreText(".block-top","403px");
	viewMoreText(".description","120px");
	slider4(".description",162,10);
	slider4(".related-app",138,53);
	slider4(".related-com",138,53);
	$("#closepop").click(function(event) {
		$(this).parent().parent("#pop-app").hide('slow');
	});
	$('.pop-app-slider').flexslider({
		animation: "slide",
		controlNav: false,
		slideshow: false

	});
	$('.tabs li').click(function(){
		$('.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');
		$(this).addClass('active');
		$($(this).find('a').attr("href") + '-content').addClass('active');
	 });
	$(".inline").colorbox({inline:true, width:"auto"});
});
function viewMoreText(Parent,mHeight){
	$(Parent).find("a.viewmore").click(function() {
		$(this).hide();
		$(this).prev().css('max-height', 'none');
		$(this).next('.viewless').show();
	});
	$(Parent).find("a.viewless").click(function() {
		$(this).hide();
		$(this).prev().prev().css('max-height', mHeight);
		$(this).prev('.viewmore').show();
	});
}
function slider4(parent,width,margin) {
	$(parent+" .slider4").flexslider({
		animation: "slide",
	    itemWidth: width,
	    itemMargin: margin,
	    controlNav:false,
	    minItems: 4,
	    maxItems: 4,
	    slideshow: false
	})
}