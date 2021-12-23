$(document).foundation();

$('.title-bar').click( function() {
	$('.header').toggleClass('active');
});

$('.sec--solutions .card').click( function() {
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
});