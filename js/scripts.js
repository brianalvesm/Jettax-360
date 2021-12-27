$(document).foundation();

$(document).ready(function(){
	(function ($) {

		$('.title-bar').click( function() {
			$('.header').toggleClass('active');
		});

		$('.sec--solutions .card').click( function() {
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		});

		var owlMobile = function() {
			if ($(window).width() < 1024) {
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
			};
		};

		owlMobile();

		$(window).resize(function() {
		  owlMobile();
		});

	})(jQuery);
});
