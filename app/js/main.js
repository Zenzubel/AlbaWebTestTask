'use strict';
document.addEventListener('DOMContentLoaded', () => {
//================== menu-burger===========================
	$('.menu-burger__icon').click(function(event) {
	$('.menu-burger__list, .menu-burger__icon').toggleClass('active');
	$('body').toggleClass('lock');
	$('.wrapper').toggleClass('displacement');
	});

	$('.menu-burger__item').click(function(event) {
	$('.menu-burger__list, .menu-burger__icon').removeClass('active');
	$('body').removeClass('lock');
	});
//==========================================================
//==========================================================
//==========================================================
//=================smooth scroll=============================
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function(e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = 0;
		// const topOffset = document.querySelector('.scrollto').offsetHeight;
		// const topOffset = 0; // если не нужен отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});
//==========================================================

	// $('.team__slider-wrap').slick({
	// 	// fade: true,
	// 	prevArrow: '<button class="team__button-prev"><svg class="team__button-next-svg" width="51" height="19" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 51 19"><path transform="rotate(-180 25.847623825073242,9.509012222290039) " d="m0.695248,10.177686l0,-1.338296l47.668025,0l-7.968083,-7.876016l0.956739,-0.94535l8.678044,8.578384l0.013288,-0.012339l0.956739,0.944401l-9.580683,9.471531l-0.956739,-0.94535l7.968083,-7.877914l-47.735414,0.000949z"/></svg></button>',
	// 	nextArrow: '<button class="team__button-next"><svg class="team__button-next-svg" width="51" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 19" fill-rule="evenodd" clip-rule="evenodd"><path d="m0,10.159662l0,-1.338296l47.668025,0l-7.968083,-7.876016l0.956739,-0.94535l8.678044,8.578384l0.013288,-0.012339l0.956739,0.944401l-9.580683,9.471531l-0.956739,-0.94535l7.968083,-7.877914l-47.735414,0.000949z"/></svg></button>',
	// 	dots: false,
	// 	variableWidth: false,
	// 	adaptiveHeight: false, //адаптивная высота полезно для мобильных 
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3,
	// 	speed: 1000,
	// 	easing: 'liner',
	// 	infinite: true,
	// 	instalSlide: 0,
	// 	autoplay: true,
	// 	autoplaySpeed: 4000,
	// 	pauseOnFocus: true,
	// 	pauseOnHover: true,
	// 	pauseOnDotsHover: true,
	// 	draggable: true, //отключение свайпа на ПК
	// 	swipe: true, // отключеие свайпа на мобильных устройствах
	// 	touchThreshold: 10, //длина касания для сработки свайпа
	// 	touchMove: true, //движение ленты при касании (свайпы при этом работают)
	// 	waitForAnimate: true, //ожидание завершения движения анимации слайда, пока не завершится переключить на другой свайп нельзя
	// 	centerMode: false,
	// 	centerPadding: '0',
	// 	responsive: [
	// 		{
	// 		breakpoint: 1210,
	// 			settings: {
	// 				variableWidth: false,
	// 				slidesToShow: 3,
	// 				swipe: true,
	// 				centerMode: true,
	// 				autoplay: true,
	// 				pauseOnFocus: false,
	// 				pauseOnHover: true,
	// 				centerPadding: '0'
	// 			}
	// 		},
	// 		{
	// 		breakpoint: 945,
	// 			settings: {
	// 				variableWidth: false,
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2,
	// 				swipe: true,
	// 				autoplay: true,
	// 				pauseOnFocus: false,
	// 				pauseOnHover: false,
	// 				centerPadding: '0',
	// 				centerMode: false
	// 			}
	// 		},
	// 		{
	// 		breakpoint: 640,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 	]
	// });

		var mySwiper = new Swiper ('.weekly__slider-container', {
		containerModifierClass: 'weekly__slider-container', 
		wrapperClass: 'weekly__slider-wrapper',
		slideClass: 'weekly__slider-item',
		loop: true,
		slidesPerView: 1,
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

///////////////start-nicescroll//////////////////////
	$(".my-class").niceScroll({
		cursorcolor:"#b8a47e",
		cursorwidth:"4px",
		background:"none",
		cursorborder:"none",
		cursorborderradius:4
	});
///////////////end-nicescroll//////////////////////

});
