$(document).ready(function() {
    adapt();
    setListeners();
});

function adapt() {
	var height = window.innerHeight;
    $('body').height(height);
}

function setListeners() {
	$(window).resize(function() {
		var height = window.innerHeight;
    	$('body').height(height);
	});
}

$(window).scroll(function() {
	if ( $(window).scrollTop() > 20 ) {
		$("#header").addClass("shadow");
	} else {
		$("#header").removeClass("shadow");
	}
});