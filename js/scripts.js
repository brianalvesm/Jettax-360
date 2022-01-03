$(document).foundation();

var Sheepbar = new Sheepbar();

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

		$('.owl-carousel').owlCarousel({
		  center: false,
		  loop:false,
		  margin:10,
		  nav:false,
		  dots:false,
		  autoplay:false,
		  URLhashListener:true,
		  startPosition: 'URLHash',
		  responsive : {
		    // breakpoint from 0 up
		    0 : {
		    	items: 2
		    },
		    // breakpoint from 640 up
		    640 : {
		    	items: 3
		    }
		  }
		});

	})(jQuery);
});
