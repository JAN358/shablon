(function ($) {
  'use strict';



  $(document).ready(function () {

	$(window).scroll(function() {
	if(($(window).scrollTop() > 80) && (screen.width >= 660)) {
		$('#glavmenu').addClass('fixmenu');
		$('body').css({'margin-top':'52px'});
	};
	});

	$(window).scroll(function() {
		if(($(window).scrollTop() < 80) && (screen.width >= 660)) {
			$('#glavmenu').removeClass('fixmenu');
			$('body').css({'margin-top':'0'});
		};
	});

	$('#glavmenu').find('a[href*=#]').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 40}, 1000);
		e.preventDefault();
		return false;
	});



	$('.soglasen').click(function() {
	$('#soglasen').css({display: 'block'});
	});
	$('#fz_close').click(function() {
		$('#soglasen').css({display: 'none'});
	});

	$('#fz_hide').click(function(event) {
	    if ($(event.target).closest('#fz_content').length) return;
	    $('#soglasen').css({display: 'none'});
	    event.stopPropagation();
	 });

	var owl = $('.homeslider');
      owl.owlCarousel({
		autoPlay: 6000,
	    items : 1,
	    singleItem: true,
		navigation: true,
		navigationText:	["<i class='glyphicon glyphicon-chevron-left' aria-hidden='true'></i>","<i class='glyphicon glyphicon-chevron-right' aria-hidden='true'></i>"],
		pagination: true,
		paginationNumbers: false
	});

    var owl2 = $('.slider2');
      owl2.owlCarousel({
		autoPlay: 3000,
	    items : 4,
		navigation: true,
		navigationText:	["<i class='glyphicon glyphicon-chevron-left' aria-hidden='true'></i>","<i class='glyphicon glyphicon-chevron-right' aria-hidden='true'></i>"],
		pagination: false,
		paginationNumbers: false
	});

    $('#glavmenu').scrollspy();

  }); //end ready

}(jQuery));