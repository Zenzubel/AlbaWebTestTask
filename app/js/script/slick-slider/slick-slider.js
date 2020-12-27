$(function(){

	$('.slider-top').slick({
		// fade: true,
		prevArrow: '<img class="arrow-prev" src="" alt="" />',
		nextArrow: '<img class="arrow-next" src="" alt="" />',
		dots: true,
		adaptiveHeight: false, //адаптивная высота полезно для мобильных 
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'liner',
		infinite: true,
		instalSlide: 0,
		autoplay: false,
		autoplaySpeed: 2000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true, //отключение свайпа на ПК
		swipe: true, // отключеие свайпа на мобильных устройствах
		touchThreshold: 10, //длина касания для сработки свайпа
		touchMove: true, //движение ленты при касании (свайпы при этом работают)
		waitForAnimate: true, //ожидание завершения движения анимации слайда, пока не завершится переключить на другой свайп нельзя
		centerMode: true,
		variableWidth: false,
		// centerPadding: '10px'
	});


	///три слайдера в одном
		 $('.slider__images').slick({
		prevArrow: '<img class="slick-prev" src="img/slider/prew-arrow.svg" alt="" />',
		nextArrow: '<img class="slick-next" src="img/slider/next-arrow.svg" alt="" />',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.slider__down-box, .slider__title',
		autoplay: true,
		infinite: true
	});
	 $('.slider__title').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.slider__down-box',
		autoplay: true,
		infinite: true
	});
	 	$('.slider__down-box').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider__images',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		infinite: true,
		variableWidth: true
	});

});