
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

    if ( $("#photography").length ) {
        load_pictures();
    }

});

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

async function load_pictures() {

    for (var i = 1; i <= 22; i++) {
        await delay(i);
        /*$("#photography").append( 
            '<div class="row photo">'
                +'<img class="portfolio-pic" src="../images/photography/pics-'+i+'.jpg">'
            +'</div>'
        );
        */
    }
}

function delay(n) {
  return new Promise(resolve => setTimeout(function() {
    $("#photography").append( 
        '<div class="row photo">'
            +'<img class="portfolio-pic" src="../images/photography/pics-'+n+'.jpg">'
        +'</div>'
    );
    resolve();
    }, 800));
}

function load_picture_n(n) {
    $("#photography").append( 
        '<div class="row photo">'
            +'<img class="portfolio-pic" src="../images/photography/pics-'+n+'.jpg">'
        +'</div>'
    );
}

$(window).scroll(function() {
	if ( $(window).scrollTop() > 20 ) {
		$("#header").addClass("shadow");
	} else {
		$("#header").removeClass("shadow");
	}
});

