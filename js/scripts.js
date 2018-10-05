
$(document).ready(function() {
    //adapt();
    //setListeners();

	$('#nav-icon').click(function() {
		$(".h-links").toggleClass('open');
	});


    if ( $(".bg").length ) {
    	adapt_bg();
    	setListeners();
    }

    if ( $("#final-cut").length ) {
    	adapt_video();
    	setListeners();
    }
});


/*
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
*/

function adapt_bg() {
	$(".bg").height( $(document).innerHeight() );
}

function adapt_video() {
	var w = window.innerWidth;
	var h = 448;
    if ( w < 800 ) {
        h = w*0.622222222222;
    }
    $("#final-cut iframe").height(h);
}

function setListeners() {
	$(window).resize(function() {
		if ( $(".bg").length ) adapt_bg();
		if ( $("#final-cut").length ) adapt_video();
	});
}


$(window).scroll(function() {
	if ( $(window).scrollTop() > 20 ) {
		$("#header").addClass("shadow");
	} else {
		$("#header").removeClass("shadow");
	}
});

