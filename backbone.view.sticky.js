define(['backbone.view.scroll','jquery'], function(ScrollView, $) {

	var Sticky = ScrollView.extend({
		initialize: function(options) {

			// sticky element
			this.$sticky = options.sticky || this.$el;
			// the sticky wrapper
			this.$wrapper = options.wrapper || this.$sticky.wrap('<div class="sticky-wrapper" />').parent();

			this.offset = options.offset || this.offset;

			ScrollView.prototype.initialize.call(this, options);
		},

		/**
		 * Distance from the frame's top at which the sticky element should become sticky
		 */
		offset: 0,

		/**
		 * Sticky class to be set on the element
		 */
		stickyClass: 'stuck',

		/**
		 * Overweite Scrollview handleScroll method
		 */
		handleScroll: function(e, data) {
			// data is a special data object passed by the scrollview.
			// it contains: frameHeight, frameScrollTop
			if (this.$wrapper.offset().top - this.$frame.offset().top - this.offset <= 0) {
				this.stick();
			} else {
				this.unstick();
			}
		},

		stick: function() {

			console.log('stick!')

			this.$wrapper.height(this.$sticky.height());

			this.$sticky.addClass(this.stickyClass);
			this.trigger('stick', this);
		},

		unstick: function() {
			console.log('unstick')

			this.$wrapper.height('');

			this.$sticky.removeClass(this.stickyClass);
			this.trigger('unstick', this);
		},
	});

	return Sticky;
});