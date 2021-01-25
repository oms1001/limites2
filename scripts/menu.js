$(document).ready(function() {
	$menu = $('.header').find('ul').find('li');

	$menu.hover(function() {
        console.log("boliii")
        $(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});
});
