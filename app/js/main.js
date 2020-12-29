'use strict';
document.addEventListener('DOMContentLoaded', () => {
//================== menu-burger===========================
	const burgerIcon = document.querySelector('.menu-burger__icon');
	const burgerMenu = document.querySelector('.menu-drop');
	const burgerMenuLink = document.querySelectorAll('.menu-drop__link');
	const body = document.querySelector('body');

	burgerIcon.addEventListener('click', (event) => {
		burgerIcon.classList.toggle('active');
		if (burgerIcon.classList.contains('active')) {
			body.classList.add('lock');
			burgerMenu.classList.add('active');
		} else {
			body.classList.remove('lock');
			burgerMenu.classList.remove('active');
		}
	});

	burgerMenu.addEventListener('click', (event) =>{
		const target = event.target;
		if (target && target.classList.contains('menu-drop__link')){
			burgerIcon.classList.remove('active');
			burgerMenu.classList.remove('active');
			body.classList.remove('lock');
		}
	});
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

		var mySwiper = new Swiper ('.more__container', {
		containerModifierClass: 'more__container', 
		wrapperClass: 'more__wrapper',
		slideClass: 'more__item',
		loop: true,
		freeMode: false,
		simulateTouch: false,
		slidesPerView: 'auto',
		centeredSlides: false,
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		scrollbar: {
			el: '.more__scroll',
			draggable: true
		},
	});

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
