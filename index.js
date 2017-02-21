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

	});
})(jQuery);