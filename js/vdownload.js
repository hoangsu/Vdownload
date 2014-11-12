$(document).ready(function() {
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
	$(".inline").colorbox({inline:true, width:"40%"});
});
