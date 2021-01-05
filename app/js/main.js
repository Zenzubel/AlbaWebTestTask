'use strict';
document.addEventListener('DOMContentLoaded', () => {
//==================start menu-burger===========================
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
//================end menu-burger=========================
//=================start smooth scroll=============================
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
//=================end smooth scroll=============================
//=================start slider swiper=============================
	var mySwiper = new Swiper ('.more__container', {
		containerModifierClass: 'more__container', 
		wrapperClass: 'more__wrapper',
		slideClass: 'more__item',
		loop: true,
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
			}
		}
	});
//=================end slider swiper=============================
//=================start Magic Scroll============================
	// initScrollMagic
	var controller = new ScrollMagic.Controller();
//==========start scene header============
	new ScrollMagic.Scene({
		triggerElement: "",
		duration: '0',
		triggerHook: 0.1,
		offset: 40,
		reverse: false})
	.setClassToggle(".header__inner", "active") // add class toggle
	.addTo(controller);
//==========end scene header============
//==========end scene advantages============
	// start scene 
	new ScrollMagic.Scene({
		triggerElement: ".advantages",
		duration: '0',
		triggerHook: 0.3,
		offset: 0,
		reverse: false})
	.setClassToggle(".advantages__card--1", "active") // add class toggle
	// 	.addIndicators({
	// 	name: 'advantages',
	// 	colorTrigger: 'black',
	// 	colorStart: 'red',
	// 	colorEnd: 'green'
	// }) // add indicators (requires plugin)
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".advantages",
		duration: '0',
		triggerHook: 0.3,
		offset: 0,
		reverse: false})
	.setClassToggle(".advantages__card--2", "active") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".advantages",
		duration: '0',
		triggerHook: 0.3,
		offset: 0,
		reverse: false})
	.setClassToggle(".advantages__card--3", "active") // add class toggle
	.addTo(controller);
	//end scene
//==========end scene advantages============
//==========start scene facts============
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".facts",
		duration: '0',
		triggerHook: 0.5,
		offset: 0,
		reverse: false})
	.setClassToggle(".facts__discription--outside", "active") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".facts",
		duration: '0',
		triggerHook: 0.5,
		offset: 0,
		reverse: false})
	.setClassToggle(".facts__image--outside", "active") // add class toggle
	.addTo(controller);
	//end scene facts
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".facts__discription--inside",
		duration: '0',
		triggerHook: 0.7,
		offset: 0,
		reverse: false})
	.setClassToggle(".facts__image--inside", "active") // add class toggle
	.addTo(controller);
	//end scene facts
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".facts__discription--inside",
		duration: '0',
		triggerHook: 0.7,
		offset: 0,
		reverse: false})
	.setClassToggle(".facts__discription--inside", "active") // add class toggle
	.addTo(controller);
	//end scene
//==========end scene facts============
//==========start scene parametrs============
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".parametrs__title",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false})
	.setClassToggle(".parametrs__body", "active") // add class toggle
	.addTo(controller);
	//end scene
//==========end scene parametrs============

//================= end Magic Scroll============================
});
