/* Count to a specific number */
function count(els) {
	els.each(function () {
		$(this)
			.prop('Counter', 0)
			.animate(
				{
					Counter: $(this).text(),
				},
				{
					duration: 3000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					},
				}
			);
	});
}
/* Count when the counter section is in viewport */
const counterEls = $('.counter .counter__count');
new Waypoint({
	element: counterEls,

	handler: function () {
		count(counterEls);

		this.destroy();
	},

	offset: 'bottom-in-view',
});

$(document).ready(function(){	
	$(window).bind('scroll', function() {
	var distance = 25;
		  if ($(window).scrollTop() > $(window).height()-75) {
			  $('nav').fadeOut(500);
		  }
		  else {
			  $('nav').fadeIn(500);
		  }

		  if ($(window).scrollTop() > distance) {
			$('nav').css("background", "rgb(0,0,0,0.9)");
			}
			else {
				$('nav').css("background", "rgb(0,0,0,0)");
			}

	 });

	});

	
