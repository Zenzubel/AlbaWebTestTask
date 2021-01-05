'use strict';
document.addEventListener('DOMContentLoaded', () => {
//================== menu-burger===========================
	const burgerIcon = document.querySelector('.menu-burger__icon');
	const burgerMenu = document.querySelector('.menu-drop');
	const burgerMenuLink = document.querySelectorAll('.menu-drop__link');
	const body = document.querySelector('body');
	const wrapper = document.querySelector('.wrapper');
	const headerInner = document.querySelector('.header__inner');

	burgerIcon.addEventListener('click', (event) => {
		burgerIcon.classList.toggle('active');
		if (burgerIcon.classList.contains('active')) {
			body.classList.add('lock');
			burgerMenu.classList.add('active');
			wrapper.classList.add('displacement');
			headerInner.classList.add('displacement');
		} else {
			body.classList.remove('lock');
			burgerMenu.classList.remove('active');
			wrapper.classList.remove('displacement');
			headerInner.classList.remove('displacement');
		}
	});

	burgerMenu.addEventListener('click', (event) =>{
		const target = event.target;
		if (target && target.classList.contains('menu-drop__link')){
			burgerIcon.classList.remove('active');
			burgerMenu.classList.remove('active');
			wrapper.classList.remove('displacement');
			headerInner.classList.remove('displacement');
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
		loop: false,
		slidesPerView: 1,
		spaceBetween: 20,
		freeMode: false,
		centeredSlides: true,
		scrollbar: {
			el: '.more__scroll',
			draggable: true
		},
		breakpoints: {
			330: {
				loop: true,
				slidesPerView: 'auto',
				centeredSlides: false,
				simulateTouch: false,
			},
			// 991: {
			// 	loop: true,
			// 	spaceBetween: 20,
			// 	slidesPerView: 'auto',
			// 	freeMode: false,
			// },
		}
	});

//////////////////////start scrollMagic//////////////////////
		// initScrollMagic
	var controller = new ScrollMagic.Controller();
	// start scene
	new ScrollMagic.Scene({
		triggerElement: "",
		duration: '0',
		triggerHook: 0.1,
		offset: 40,
		reverse: true})
	.setClassToggle(".header__inner", "active") // add class toggle
	.addIndicators({
		name: 'anim scene',
		colorTrigger: 'black',
		colorStart: 'red',
		colorEnd: 'green'
	}) // add indicators (requires plugin)
	.addTo(controller);
	//end scene
//////////////////////end scrollMagic//////////////////////



});
