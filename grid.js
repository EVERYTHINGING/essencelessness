(function($) {
	$(function(){
		//todo
		//1. fix fast clicking bugs
		//2. see if translate3d works better for grid transforms than top, left

		var $window = $(window);
		var $body = $('body');
		var $grid = $('.grid');
		
		var boxMultipleWidth, boxMultipleHeight
		var openScale = 0.95;
		var scale = openScale*boxMultipleWidth;

		var $selectedBox = null;

		window.initGrid = function(){
			/*
			$('.project').each(function(index, value){
				var $box = $(this);
				var rgb = [180, Math.floor(Math.random()*255), Math.floor(Math.random()*255)];
				rgb.sort(function() { return 0.5 - Math.random() });

				$box.css({
					'background-color': 'rgb('+rgb[0]+', '+rgb[1]+', '+rgb[2]+')',
					'color': 'rgb('+(255-rgb[0])+', '+(255-rgb[1])+', '+(255-rgb[2])+')'
				});

				$box.find('a').css({
					'color': 'rgb('+(200-rgb[0])+', '+(200-rgb[1])+', '+(200-rgb[2])+')'
				});
			});
			*/

			$('.box').click(function(){
				openBox($(this));
			});

			boxMultipleWidth = $window.width()/$('.box').first().outerWidth();
			boxMultipleHeight = $window.height()/$('.box').first().outerHeight();

			onResize();
		}

		function openBox($box){
			if($selectedBox)
			{
				if($selectedBox.is($box)){ 
					//closeBox($box); 
					return; 
				}
				closeBox($selectedBox, 0);
				setTimeout(function(){ openBox($box); }, 0);
			}else{
				$grid.data('scale', scale);
				$grid.stop(true, true).animate({
					top: (((-1*($box.offset().top))*scale)+$window.scrollTop()) + (($window.height()-($box.outerHeight()*scale))/2),
					left: ((-1*($box.offset().left))*scale)+(($window.width() - ($box.outerWidth()*scale))/2),
					width: $grid.width()*scale,
					height: $grid.height()*scale
				}, 400, 'easeOutExpo');


				$grid.addClass('zoomed');
				$selectedBox = $box;
				$box.addClass('open');
				$body.css({ overflow: 'hidden' });

				var $project = $box.find('.project');	
				$project.fadeIn(300);		

				$project.find('img').each(function(index){
					var $img = $(this);
					$img.delay(400+(100*index)).fadeIn(1000);
				});

				if($window.width() > $window.height()){
					var spacing = ($window.height()-($box.outerHeight()*scale))/2;
					
					$project.stop(true, true).delay(400).animate({
						left: ((($window.width()-($box.outerWidth()*scale))/2)-spacing)*-1,
						width: $window.width()-(spacing*2)
					}, 300, 'easeOutExpo');
				}else{
					var spacing = ($window.width()-($box.outerWidth()*scale))/2;
					
					$project.stop(true, true).delay(400).animate({
						top: ((($window.height()-($box.outerHeight()*scale))/2)-spacing)*-1,
						height: $window.height()-(spacing*2)
					}, 300, 'easeOutExpo');
				}
				
			}
		}

		function closeBox($box, speed){
			
			$grid.stop(true, true).delay(speed).animate({
				top: 0,
				left: 0,
				width: $grid.width()/$grid.data('scale'),
				height: $grid.height()/$grid.data('scale')
			}, 300, 'easeOutExpo', function(){
				$grid.css({ width: "100%", height: "auto" });
			});

			$grid.removeClass('zoomed');

			var $project = $box.find('.project');
			$project.find('img').delay(speed).fadeOut(0);
			$project.stop(true, true).animate({
				top: 0,
				left: 0,
				width: $box.outerWidth(),
				height: $box.outerHeight()
			}, speed, 'easeOutExpo', function(){
				$project.css({
					width: '100%',
					height: '100%'
				});

				$box.removeClass('open');
				$body.css({ overflow: 'auto' });
			});

			$project.fadeOut(100);

			$selectedBox = null;
		}

		$('body').on('click', '.project__close-btn', function(e){
			e.stopPropagation();
			closeBox($(this).parents('.box'), 300);
		});

		
		function onResize(){
			scale = boxMultipleWidth*openScale;
			
			if($window.width() > $window.height()){
				scale = boxMultipleHeight*openScale;
			}

			if($selectedBox){ closeBox($selectedBox); }
		}

		$window.resize(function(){
			onResize();
		});
		
	});
})(jQuery);