(function($) {
	$(function(){
		//todo
		//1. fix fast clicking bugs
		//2. see if translate3d works better for grid transforms than top, left
		//3. fix resize issues
		//4. try another animation library

		var $window = $(window);
		var $body = $('body');
		var $grid = $('.grid');
		
		var boxMultipleWidth, boxMultipleHeight
		var openScale = 0.95;
		var scale = openScale*boxMultipleWidth;

		var $selectedBox = null;

		window.initGrid = function(){

			$('.box').click(function(){
				openBox($(this));
			});

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
				//add html to project
				var $project = $box.find('.project');	
				var projectTemplate = Handlebars.compile($("#template--project").html());
				var projectHTML = projectTemplate(window.data.projects[$box.data('name')]);
				$project.append(projectHTML);
				$project.fadeIn(300);

				var top  = (($grid.offset().top*scale)  - ($box.offset().top*scale) - $grid.offset().top) + $window.scrollTop() + (($window.height()-($box.outerHeight()*scale))/2);
				console.log($grid.offset().left);
				var left = (($grid.offset().left*scale) - ($box.offset().left*scale)  - $grid.offset().left) + (($window.width() - ($box.outerWidth()*scale))/2);

				//animate grid
				$grid.data('scale', scale);
				$grid.stop(true, true).animate({
					top: top,
					left: left,
					width: $grid.width()*scale,
					height: $grid.height()*scale
				}, 300, 'easeOutExpo');	

				//animate project
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

				$grid.addClass('zoomed');
				$selectedBox = $box;
				$box.addClass('open');
				$body.css({ overflow: 'hidden' });
			}
		}

		function closeBox($box, speed){
			//animate grid
			$grid.stop(true, true).delay(speed).animate({
				top: 0,
				left: 0,
				width: $grid.width()/$grid.data('scale'),
				height: $grid.height()/$grid.data('scale')
			}, 300, 'easeOutExpo', function(){
				$grid.css({ width: "100%", height: "auto" });
			});
	
			//animate project
			var $project = $box.find('.project');
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
				$project.empty();
			});

			$grid.removeClass('zoomed');
			$project.fadeOut(100);
			$selectedBox = null;
		}

		$('body').on('click', '.project__close-btn', function(e){
			e.stopPropagation();
			closeBox($(this).parents('.box'), 300);
		});

		function onResize(){
			if($selectedBox){ closeBox($selectedBox); }

			boxMultipleWidth = $grid.width()/$('.box').first().outerWidth();
			boxMultipleHeight = $window.height()/$('.box').first().outerHeight();
			scale = boxMultipleWidth*openScale;
			
			if($window.width() > $window.height()){
				scale = boxMultipleHeight*openScale;
			}
		}

		$window.resize(function(){
			onResize();
		});
		
	});
})(jQuery);