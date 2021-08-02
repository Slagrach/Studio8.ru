$('#up, #up2').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});

$('.projects-inner').slick({
	slidesToShow: 3,
	nextArrow: $('.projects-control__next'),
	prevArrow: $('.projects-control__prev'),
})

// window.onload = function () {
// 	document.addEventListener('click', docAction);
//
// 	function docAction(e) {
// 		const targetElem = e.target;
// 		if (window.innerWidth > 768 && isMobile.any()) {
// 			if (targetElem.classList.contains('.header-dots')) {
// 				targetElem.closest('.header-content').classList.add('_active');
// 				console.log(docAction);
// 			}
// 		}
// 	}
// }


const Body = document.querySelector('body');
const headerBody = document.querySelector('.header-body');
const headerDots = document.querySelector('.header-dots');
const headerCross = document.querySelector('.header-cross');
const headerButtonsOpen = document.querySelector('.header-buttons__open');

headerDots.addEventListener('click', function () {
	headerBody.classList.add('_active');
	Body.classList.add('_lock');
})
headerCross.addEventListener('click', function () {
	headerBody.classList.remove('_active');
	Body.classList.remove('_lock')
})


headerButtonsOpen.addEventListener('click', function () {
	document.querySelector('.header-right').classList.add('_show');
	document.querySelector('.menu').classList.add('_show');
	document.querySelector('.header-buttons').classList.add('_btn');
	document.querySelector('.header').classList.add('_bg');
	document.querySelector('.intro-content').classList.add('_none');
	Body.classList.add('_lock');
})

document.querySelector('.header-buttons__close').addEventListener('click', function () {
	document.querySelector('.header-right').classList.remove('_show');
	document.querySelector('.menu').classList.remove('_show');
	document.querySelector('.header-buttons').classList.remove('_btn');
	document.querySelector('.header').classList.remove('_bg');
	Body.classList.remove('_lock')
	document.querySelector('.intro-content').classList.remove('_none');
})
