(function( $ ){
   $.fn.mess = function() {
		var li = $('#ready').find('li');
		var mess = {
			random: function(low, up){
				return Math.floor((Math.random()*(low-up+1))+up);
			},
			css: function(){
				var rotate = this.random(-20, 20),
					zindex = this.random(0, li.length),
					degrees = 'rotate('+rotate+'deg)';
				return {'degrees': degrees, 'zindex': zindex }
			},
			degrees: function(element){
				var random = this.css();
				$(element).css({
					'-webkit-transform': random.degrees,
					'-moz-transform': random.degrees,
					'-o-transform': random.degrees,
					'z-index': random.zindex
				});
			},
			animate: function(element, x, y){
				$(element).animate({
					top: y,
					left: x
				}, 400);
			}
		}
		li.each(function(){
			var t = $(this), x = mess.random(500, 100), y = mess.random(60, 300);
			mess.animate(t, x, y);
			mess.degrees(t);
			$(this).draggable();
		});
   }; 
})( jQuery );