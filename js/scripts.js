$(document).foundation();

var Sheepbar = new Sheepbar();

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
    $(".header").addClass("scroll");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
  	$(".header").removeClass("scroll");
  }
});

$(document).ready(function(){
	(function ($) {

		$('.title-bar').click( function() {
			$('.header').toggleClass('active');
		});

		$('.sec--solutions .card').click( function() {
			$(this).addClass('active');
			$(this).siblings().removeClass('active');

			if ($(this).hasClass('one active')) {
				$('.sec--solutions').addClass('one');
			} else {
				$('.sec--solutions').removeClass('one');
			}
			if ($(this).hasClass('two active')) {
				$('.sec--solutions').addClass('two');
			} else {
				$('.sec--solutions').removeClass('two');
			}
			if ($(this).hasClass('three active')) {
				$('.sec--solutions').addClass('three');
			} else {
				$('.sec--solutions').removeClass('three');
			}
		});

	})(jQuery);
});
