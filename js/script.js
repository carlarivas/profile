/* Copyright year: always the current year */
$('[data-current-year]').text(new Date().getFullYear());

/* Years of experience: updates automatically every year */
$('[data-years-since]').each(function () {
	$(this).text(new Date().getFullYear() - Number($(this).data('years-since')));
});

/* Lines of code: base value plus a fixed amount per day since base date */
$('[data-base][data-per-day]').each(function () {
	var parts = String($(this).data('base-date')).split('-');
	var start = new Date(parts[0], parts[1] - 1, parts[2]);
	var days = Math.max(0, Math.floor((new Date() - start) / 86400000));
	var value = Number($(this).data('base')) + days * Number($(this).data('per-day'));
	$(this).attr('data-count', value).text(formatCount(value, $(this).data('format')));
});

/* 99541 -> "99.5k" when format is "k" */
function formatCount(n, format) {
	if (format === 'k' && n >= 1000) {
		return (Math.floor(n / 100) / 10).toFixed(1).replace(/\.0$/, '') + 'k';
	}
	return String(Math.ceil(n));
}

/* Count to a specific number */
function count(els) {
	els.each(function () {
		var $el = $(this);
		var target = Number($el.attr('data-count') || $el.text());
		var format = $el.data('format');
		$el
			.prop('Counter', 0)
			.animate(
				{
					Counter: target,
				},
				{
					duration: 3000,
					easing: 'swing',
					step: function (now) {
						$el.text(formatCount(now, format));
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
	$(window).on('scroll', function() {
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

	
