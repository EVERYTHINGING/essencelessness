(function($) {
	$(function(){

		$.each(window.data.projects, function(projectKey, projectObj){
			$.each(projectObj.tags, function(index, tag){
				if(window.data.tags[tag] == undefined){
					window.data.tags[tag] = [projectKey];
				}else{
					window.data.tags[tag].push(projectKey);
				}
			});
		});

		console.log(window.data);

		var $window = $(window);

		var tagsTemplate = Handlebars.compile($("#template--tags").html());
		var tagsHTML = tagsTemplate(window.data);
		$('.tags').append(tagsHTML);

		var thumbsTemplate = Handlebars.compile($("#template--thumbs").html());
		var thumbsHTML = thumbsTemplate(window.data);
		$('.grid').append(thumbsHTML);

		initGrid();

		$('body').on('click', '.fullscreen-btn', function(){
			toggleFullScreen(document.getElementById($(this).data('fs')));
		});

		window.fadeIn = function(el){
			$(el).fadeIn(500);
		}


		function toggleFullScreen(el) {
		  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
		   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
		    if (el.requestFullScreen) {  
		      el.requestFullScreen();  
		    } else if (el.mozRequestFullScreen) {  
		      el.mozRequestFullScreen();  
		    } else if (el.webkitRequestFullScreen) {  
		      el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
		    }  
		  } else {  
		    if (document.cancelFullScreen) {  
		      document.cancelFullScreen();  
		    } else if (document.mozCancelFullScreen) {  
		      document.mozCancelFullScreen();  
		    } else if (document.webkitCancelFullScreen) {  
		      document.webkitCancelFullScreen();  
		    }  
		  }  
		}

	});
})(jQuery);