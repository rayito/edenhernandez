$(document).ready(function() {
    adapt();
    setListeners();
});

function adapt() {
	//var height = window.innerHeight;
    //$('body').height(height);

    if ( $(".wireframe").length ) {
    	if (window.innerWidth >= 732)
    		$(".wireframe img").width( 700 );
    	else
    		$(".wireframe img").width( $(".row").width() - 32 );
    }
}

function setListeners() {
	$(window).resize(function() {
		adapt();
	});
}

$(window).scroll(function() {
	if ( $(window).scrollTop() > 20 ) {
		$("#header").addClass("shadow");
	} else {
		$("#header").removeClass("shadow");
	}
});