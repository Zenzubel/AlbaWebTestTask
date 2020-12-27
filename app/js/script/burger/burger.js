$(function(){
	$('.menu-burger__icon').click(function(event) {
		$('.menu-burger__icon, .menu-burger__list').toggleClass('active');
		$('body').toggleClass('lock');	//запрет прокрутки страницы при открытом выплывающем меню
	});
});