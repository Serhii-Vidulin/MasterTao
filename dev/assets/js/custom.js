

$(document).ready(function () {
	console.log("ready!");
	$('.first-screen-slider').slick({
		dots: true,
		speed: 2000,
		arrows: true,
		appendArrows: ".container-arrows",

		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: false,
				}
			},

		]
	});

	Fancybox.bind("[data-fancybox]", {
		// Your custom options
	});

});