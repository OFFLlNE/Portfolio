$(window).resize(function(e) {
	var viewportHeight = $(window).height();
	$(".testPage").css("margin-top", viewportHeight)
	console.log (viewportHeight);
});

