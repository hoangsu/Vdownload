$(document).ready(function() {
	$(".text-size #aa").click(function(event) {
		$(this).next('ul').slideToggle();
	});
	$('.home-slider').flexslider({
		animation: "slide",
		controlNav: "thumbnails",
		directionNav:false
	});
	viewMoreText(".block-top","403px");
	viewMoreText(".description","120px");
	viewMoreText(".top-software","314px");
	flexSlider(".description",162,10,4);
	flexSlider(".related-app",138,53,4);
	flexSlider(".related-com",138,53,4);
	flexSlider(".featured-books",126,12,5);
	flexSlider(".newest-books",126,12,5);
	flexSlider(".featured-documents",126,12,5);
	flexSlider(".newest-documents",126,12,5);
	flexSlider(".best-documents",126,12,5);
	flexSlider(".interested-documents",126,12,5);
	flexSlider(".samecat-documents",126,12,5);
	flexSlider(".sameau-documents",126,12,5);
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
	$('.upload-click').click(function(event) {
		$('#uploadfile').click();
	});
	$(".inline").colorbox({inline:true, width:"auto"});
	$(".category-app li.active").click(function(event) {
		$(this).find('ul').slideToggle();
	});
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
function flexSlider(parent,width,margin,numberItems) {
	$(parent+" .slider4").flexslider({
		animation: "slide",
	    itemWidth: width,
	    itemMargin: margin,
	    controlNav:false,
	    minItems: numberItems,
	    maxItems: numberItems,
	    slideshow: false
	})
}
