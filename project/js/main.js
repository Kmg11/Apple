$(function () {
	// Navbar
	var myWindow = $(window),
		navBar = $(".navbar");

	// Scroll Navbar
	if (myWindow.scrollTop() >= "100") {
		navBar.css("backgroundColor", "#171515");
	} else {
		navBar.css("backgroundColor", "transparent");
	}

	myWindow.scroll(function () {
		if (myWindow.scrollTop() >= "100") {
			navBar.css("backgroundColor", "#171515");
		} else {
			navBar.css("backgroundColor", "transparent");
		}
	});

	// Search
	$(".searchbar").click(function () {
		$("#search").animate(
			{
				top: 0,
			},
			500
		);
	});
	$("#closeSearch").click(function () {
		$("#search").animate(
			{
				top: "-74px",
			},
			500
		);
	});

	// Fit Text
	$(".fit-text").fitText(0.9, {
		minFontSize: "50px",
		maxFontSize: "180px",
	});

	$(".music-fit-text").fitText(0.8, {
		minFontSize: "50px",
		maxFontSize: "180px",
	});

	$(".h3-fit-text").fitText(2.8, {
		minFontSize: "1px",
		maxFontSize: "30px",
	});

	$(".upper-cameras").fitText(1.4, {
		minFontSize: "40px",
		maxFontSize: "1200px",
	});

	$(".mt-big-fit-text").fitText(1.7, {
		minFontSize: "40px",
		maxFontSize: "120px",
	});

	$(".my-normal-fit-text").fitText(1.7, {
		minFontSize: "30px",
		maxFontSize: "50px",
	});

	$(".tab").slick({
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	// Music Slider
	$(".music-slider ul li").click(function () {
		if (!$(this).hasClass("active")) {
			$(this).addClass("active").siblings().removeClass("active");
			$(".tabs > div").hide();
			$($(this).data("music")).fadeIn(700);
			$(".tab").slick("refresh");
		} else {
		}
	});

	// Apps Built In
	$(".built-in ul li").click(function () {
		if (!$(this).hasClass("active")) {
			$(this).addClass("active").siblings().removeClass("active");
			$(".built-in .apps .app").hide();
			$($(this).data("app")).fadeIn(500);
		}
	});

	// Apps Pro Apps
	$(".pro-apps ul li").click(function () {
		if (!$(this).hasClass("active")) {
			$(this).addClass("active").siblings().removeClass("active");
			$(".pro-apps .apps .app").hide();
			$($(this).data("pro")).fadeIn(500);
		}
	});

	// Scroll To Elements
	$("a, .serv").click(function (e) {
		e.preventDefault();
		if (typeof $(this).data("scroll") !== "undefined") {
			$("html, body").animate(
				{
					scrollTop: $($(this).data("scroll")).offset().top - 80,
				},
				1500
			);

			let navbarToggler = $(".navbar-toggler");
			let navbarCollapse = $(".navbar-collapse ");
			if (navbarCollapse.hasClass("show")) {
				navbarCollapse.removeClass("show");
				navbarToggler.addClass("collapsed");
			}
		}
	});

	// Scroll To Top
	$(".scroll-to-top").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			3000
		);
	});
});
