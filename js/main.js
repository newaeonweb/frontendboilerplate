(function($){
    // Image effect
	$('.img-icon').viewportChecker({
        classToAdd: 'visible animated rotateIn',
		offset: 100,
		repeat: false
    });
	
	$('.col-md-6').viewportChecker({
        classToAdd: 'visible animated shake',
		offset: 200,
		repeat: false
    });
	
	
	// get download link and version from github repo
    $.get("package.json", {nocache: Math.random()}, function(data){

        $(function(){
            $("[data-krack-download]").attr("href", "https://github.com/newaeonweb/frontendboilerplate/releases/download/v"+data.version+"/frontendboilerplate-"+data.version+".zip")
            $("[data-krack-version]").text("Version "+data.version);
        });

    }, 'json');
	
	// get stars and forks from github
	$.ajax({
        dataType : "jsonp",
        url      : "https://api.github.com/repos/newaeonweb/frontendboilerplate?callback=ukghapi&nocache="+Math.random(),
        success  : function(data){
            if(!data) return;
                    if(data.data.watchers){
                        $("[data-krack-stargazers]").html(data.data.watchers);
                    }
                    if(data.data.forks){
                        $("[data-krack-forks]").html(data.data.forks);
                    }
                }
            });
})(jQuery);