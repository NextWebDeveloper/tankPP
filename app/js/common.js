$(function() {

	// Подключение слайдера
	$(".main__slider").owlCarousel({
		items: 1,
		dotsEach: true,
		dots: true
	});

	// Показ меню на экранах разрешением ниже 750px
	$('.header__navShow').on('click', function(){
		$(this).toggleClass('header__navShow_opened');
		$('.header__nav').slideToggle(500);
	});

	$('#email-send').on('click', function(){
		var email = $('#email');
		var modal = $('#email-modal');
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if(pattern.test(email.val())){
			modal.text('Спасибо, ' + email.val());
			modal.fadeIn(800);
		} 

	});

});

