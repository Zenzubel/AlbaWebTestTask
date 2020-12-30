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

			// function initMap(): void {
			//   // The location of Uluru
			//   const uluru = { lat: -25.344, lng: 131.036 };
			//   // The map, centered at Uluru
			//   const map = new google.maps.Map(
			//     document.getElementById("map") as HTMLElement,
			//     {
			//       zoom: 4,
			//       center: uluru,
			//     }
			//   );

			//   // The marker, positioned at Uluru
			//   const marker = new google.maps.Marker({
			//     position: uluru,
			//     map: map,
			//   });
			// }
		


});
