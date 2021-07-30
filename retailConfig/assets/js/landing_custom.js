$(document).ready(function () {
	
	// Menu Open
	$('.togglemeDeskTop').click(function() {
		$('.menuProduct').addClass('openProductMenu');
		$('body').addClass('menuOpen');
	});
	$('.menuclose').click(function() {
		$('.menuProduct').removeClass('openProductMenu');
		$('body').removeClass('menuOpen');
	});
	
	// Submenu Accordian
	$(function() {
	  $('.btn-link').click(function(j) {
		
		var dropDown = $(this).closest('.card').find('.collapse');
		$(this).closest('.accordion').find('.collapse').not(dropDown).slideUp();
		
		if ($(this).hasClass('buttonactive')) {
		  $(this).removeClass('buttonactive');
		} else {
		  $(this).closest('.accordion').find('.btn-link.buttonactive').removeClass('buttonactive');
		  $(this).addClass('buttonactive');
		}
		
		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	  });
	});
	
	// Home Team Carousel
	$('#insurancePlan').owlCarousel({
		loop: false,
		smartSpeed: 450,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false,
			},
			600: {
				items: 2,
				margin: 20,
				dots: false,
				nav: true,
			},
			1000: {
				items: 3,
				margin: 30,
				dots: false,
				nav: true,
			}
		}
	});	
		
	
	// Accordian for  Important Pointers 
	$(function() {
	  $('.acc__title').click(function(j) {
		
		var dropDown = $(this).closest('.acc__card').find('.acc__panel');
		$(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
		
		if ($(this).hasClass('active')) {
		  $(this).removeClass('active');
		} else {
		  $(this).closest('.acc').find('.acc__title.active').removeClass('active');
		  $(this).addClass('active');
		}
		
		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	  });
	});

	
	// Footer Open
	$('.footerTobbleBtn').click(function() {
		$(this).toggleClass('footerOpen');
		$('.footerNavRow').toggleClass('footerNavRowOpen');
	});
	
	// Footer According open
	$('.footerHead').click(function() {
		$(this).toggleClass('open');
		$(this).next('.panel').toggleClass('footerToggle');
	});
		
});


