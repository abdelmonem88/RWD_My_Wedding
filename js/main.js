$(document).ready(function() {
	$('.geetings').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 30,
		nav: false,
		items: 1,
		stagePadding: 0,
		dots: true,
		center: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	//people carausel
	$('.people').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 30,
		nav: false,
		items: 1,
		stagePadding: 0,
		dots: true,
		center: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});

	//Magnific popup
	$('.img-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true
		}
	});

	//sticky navbar
	{
		$(window).scroll(function() {
			let scrollTop = $(window).scrollTop();
			if (scrollTop > 0) {
				$('nav').addClass('sticky');
			} else {
				$('nav').removeClass('sticky');
			}
		});
	}

	//scroll to section
	$('.nav-link').click(function(e) {
		let target = $(this).data('scroll');
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: $(target).offset().top + 25
			},
			1500
		);
	});

	//add show class to target link
	$(window).scroll(function() {
		$('section').each(function() {
			if ($(window).scrollTop() >= $(this).offset().top - 100) {
				var sectionId = $(this).attr('id');
				$('nav a span').removeClass('show');
				$('nav a[data-scroll="' + '#' + sectionId + '"] span').addClass('show');
			}
		});
	});

	//totop icon
	$('.totop').click(function(e) {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: 0
			},
			1000
		);
	});
});

AOS.init();
