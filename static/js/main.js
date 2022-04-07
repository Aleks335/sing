function posYHandler(posY) {
	var nav = document.getElementsByTagName('nav')[0];
	var buttons = nav.getElementsByClassName('account-nav')[0];
	var isExpanded = $(".navbar-toggler").attr("aria-expanded") === "true";
	if (!isExpanded) {
		if (posY) {
			nav.classList.add('nav-small');
			nav.classList.add('navbar-light');
			nav.classList.remove('navbar-dark');
		} else {
			nav.classList.remove('nav-small');
			nav.classList.remove('navbar-light');
			nav.classList.add('navbar-dark');
		}
	}
	if (posY > window.innerHeight / 2) {
		buttons.classList.remove('account-nav-hidden');
	} else {
		buttons.classList.add('account-nav-hidden');
	}
}

function setActiveCircle(circle, active) {
	console.log(circle)
	if (active) {
		circle.classList.add('bg-primary');
		circle.classList.add('text-light');
		circle.classList.remove('text-primary');
	} else {
		circle.classList.remove('bg-primary');
		circle.classList.remove('text-light');
		circle.classList.add('text-primary');
	}
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.onload = function(e) {
	var howToSection = document.getElementById('how-to');
	preloader.classList.add('loaded-hidding');
	document.body.style.overflowY = "auto";
	setTimeout(function() {
		preloader.classList.add('loaded');
		preloader.classList.remove('loaded-hidding');
	}, 500);
}

document.addEventListener('scroll', function(e) {
	posYHandler(window.scrollY);
})

// Смена стиля навбара при открытии меню
$('.navbar-collapse').on('show.bs.collapse', function() {
	var nav = $("nav.navbar");
	nav.addClass('nav-collapse');
	nav.removeClass('navbar-light');
	nav.addClass('navbar-dark');
});

$('.navbar-collapse').on('hidden.bs.collapse', function() {
	$(".navbar").removeClass('nav-collapse');
	posYHandler(window.scrollY);
});
