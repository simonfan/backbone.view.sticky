define(['backbone.view.sticky','jquery'], function(StickyView, $) {

/*
	window.sticky1 = new StickyView({
		frame: $('#frame-1'),
		el: $('#frame-1 .sticky'),
		offset: 30,
	});

	sticky1.activate();
	*/


	window.sticky2 = new StickyView({
		frame: $('#frame-2'),
		wrapper: $('#frame-2 .special-sticky-wrapper'),
		sticky: $('#frame-2 .sticky')
	});

	sticky2.activate();

});