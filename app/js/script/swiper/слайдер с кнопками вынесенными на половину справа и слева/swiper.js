$(function () {
		var mySwiper = new Swiper ('.slider-container', {
		containerModifierClass: 'slider-container', 
		wrapperClass: 'slider-wrapper',
		slideClass: 'item',
		loop: true,
		slidesPerView: 2,
		spaceBetween: 29,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	})

});
