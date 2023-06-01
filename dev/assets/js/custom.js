

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

function checkboxPadding() {
	const checkboxBnt = document.querySelectorAll(".check-button")
	checkboxBnt.forEach(item => {
		item.closest("[class*=col]").classList.add("padding-top")
	})

}

if (document.querySelector(".calculation-form ")) {
	console.log("table")
	checkboxPadding()
} else {
	console.log("no table")
	null;
}
