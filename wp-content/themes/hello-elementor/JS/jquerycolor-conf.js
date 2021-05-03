jQuery(function($){
		$('.home').each(function(){
			var $this = $(this),
				colors = ['#FF5733', '#33FF39', '#3380FF'];

			setInterval(function(){
				var color = colors.shift();
				colors.push(color);
				$this.animate({backgroundColor: color}, 2000);
			},4000);
		});
		});