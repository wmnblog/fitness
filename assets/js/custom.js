jQuery(function ($) {
    'use strict';

    // Menu JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.main-nav').addClass('menu-shrink');
        } else {
            $('.main-nav').removeClass('menu-shrink');
        }
    });	

	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: '991'
    });

    // Search JS
    $('#close-btn').on('click', function() {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').on('click', function() {
        $('#search-overlay').fadeIn();
    });

    // Wow JS
    new WOW().init();

	// Offer Slider JS
	$('.offer-slider').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive:{
			0:{
				items: 1,
			},
			768:{
				items: 2,
			},
			992:{
				items: 5,
			}
		}
    });
    
	// Accordion JS
	$('.accordion > li:eq(0) .faq-head').addClass('active').next().slideDown();
	$('.accordion .faq-head').on('click', function(j) {
		var dropDown = $(this).closest('li').find('.faq-content');
		$(this).closest('.accordion').find('.faq-content').not(dropDown).slideUp(300);
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('.faq-head.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle(300);
		j.preventDefault();
	});

	// Instagram Slider JS
	$('.instagram-slider').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive:{
			0:{
				items: 1,
			},
			768:{
				items: 2,
			},
			992:{
				items: 6,
			}
		}
    });
    
    // Modal Video JS
    $('.js-modal-btn').modalVideo();

    // Preloader JS
	jQuery(window).on('load', function(){
		jQuery('.loader').fadeOut(500);
    });
    
    // Go Top JS
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 100) $('.go-top').addClass('active');
        if (scrolled < 100) $('.go-top').removeClass('active');
    });  
    $('.go-top').on('click', function() {
        $('html, body').animate({ scrollTop: '0' },  500);
	});

	// Switch Btn
	//$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
	
	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $('.odometer');
		odo.each(function() {
			var countNumber = $(this).attr('data-count');
			$(this).html(countNumber);
		});
	});

	// Revolution Slider JS
	jQuery('#rev_slider_1').show().revolution({
		sliderLayout: 'auto',
		responsiveLevels: [1240, 1024, 778, 480],
		gridwidth: [1240, 1024, 778, 480],
		gridheight: [800, 700, 600, 800],

		navigation: {
			bullets: {
				enable: true,
				style: 'hermes',
				hide_onleave: false,
				h_align: 'center',
				v_align: 'bottom',
				h_offset: 0,
				v_offset: 230,
				space: 5
			}
		}
	});

	// Banner Slider JS
	$('.banner-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 15,
		nav: false,
		dots: true,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
	});

	// Nice Select JS
	$('select').niceSelect();

	// Number JS
	$('.minus').on('click', function() {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').on('click', function() {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	// Subscribe Form JS
    $('.newsletter-form').validator().on('submit', function (event) {
        if (event.isDefaultPrevented()) {
            // Hande the invalid form...
            formErrorSub();
            submitMSGSub(false, 'Please enter your email correctly.');
        } else {
            // Everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === 'success') {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $('.newsletter-form')[0].reset();
        submitMSGSub(true, 'Thank you for subscribing!');
        setTimeout(function() {
            $('#validator-newsletter').addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $('.newsletter-form').addClass('animated shake');
        setTimeout(function() {
            $('.newsletter-form').removeClass('animated shake');
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = 'validation-success';
        } else {
            var msgClasses = 'validation-danger';
        }
        $('#validator-newsletter').removeClass().addClass(msgClasses).text(msg);
    }

    // AJAX Mail Chimp JS
    $('.newsletter-form').ajaxChimp({
        url: 'https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9', // Your url MailChimp
        callback: callbackFunction
	});
}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('jeel_theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('jeel_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('jeel_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();



 