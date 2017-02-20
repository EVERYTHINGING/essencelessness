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
		$('.thumbs').append(thumbsHTML);

		var $project = $('.project');
		var openThumbRect = [0, 0, 0, 0];


		window.onhashchange = function(){ onHashChange(); };

		var hashChangeCounter = 0;

		function onHashChange(){
			var hashes = window.location.hash.split("/");
			hashes.shift();
			
			if(hashes[0] == "project"){
				openProject(hashes[1]);
			}else if(hashes[0] == "tag"){
				filterThumbs(hashes[1]);
			}else{
				showAllThumbs();
			}

			hashChangeCounter++;
		}

		onHashChange();


		function openProject(name){
			//$('body').css({ overflow: 'hidden' });
			var projectTemplate = Handlebars.compile($("#template--project").html());
			var projectHTML = projectTemplate(window.data.projects[name]);

			var $thumb = $('[data-name="'+name+'"]');

			$project.empty().append(projectHTML).addClass('open');
		}

		function closeProject(){
			$('body').css({ overflow: 'auto' });
			$project.removeClass('open');
		}

		function filterThumbs(tag){
			closeProject();
			$('.thumb').each(function(){
				var $this = $(this);
				var tags = $this.data('tags');
				if(tags.indexOf(tag) == -1){
					$this.addClass('hidden');
				}else{
					$this.removeClass('hidden');
				}
			});
		}

		function showAllThumbs(){
			closeProject();
			$('.thumb').removeClass('hidden');
		}

		$('body').on('click', '.project__close-btn', function(){
			if(hashChangeCounter > 1){
				history.back();
			}else{
				window.location = window.location.origin+window.location.pathname+"#/";
			}
		});
	});
})(jQuery);