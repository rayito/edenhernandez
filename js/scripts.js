
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

function setListeners() {
	$(window).resize(function() {
		adapt_bg();
	});
}


$(window).scroll(function() {
	if ( $(window).scrollTop() > 20 ) {
		$("#header").addClass("shadow");
	} else {
		$("#header").removeClass("shadow");
	}
});

