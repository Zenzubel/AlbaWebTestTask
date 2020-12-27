$(function () {
	var mySwiper = new Swiper ('.weekly__slider-container', {
		containerModifierClass: 'weekly__slider-container', 
		wrapperClass: 'weekly__slider-wrapper',
		slideClass: 'weekly__slider-item', 
		loop: true,
		centeredSlides: true,
		spaceBetween: 5,
		slidesPerView: 'auto',
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			clickable: true,
			el: '.slider__pagination',
		},
		breakpoints: {
			320: {
				allowTouchMove: true,
				loop: false,
				spaceBetween: 0,
				centeredSlides: false,
				slidesPerView: 'auto',
				followFinger: true,
			},
			1024: {
				 allowTouchMove: false,
			},
		}
	})
});