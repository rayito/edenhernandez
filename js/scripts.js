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