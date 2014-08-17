$(document).ready(function() {

	//append banner's images to check them for load
	$('.js-logo span').each(function() {
	    var src = $(this).attr('data-src')
	    $('.js-logo').append('<img src="' + src + '">');
	    $('.promo img').hide();
	});

	//when images are loaded - play animation
	$('.js-logo img').load(function() {
	    // console.log('images are loaded');
	    $('.js-logo img').remove()
	    $('.js-logo').addClass('animated');
	});
	
	$("a.btn").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500
    });
    return false;
	});

	$( ".js-open-timelinecontent1" ).hover(
	  function() {
	  	$( ".timelinecontent" ).removeClass("is-show");
	    $( ".timelinecontent_1" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent2" ).hover(
	  function() {
	  	$( ".timelinecontent" ).removeClass("is-show");
	    $( ".timelinecontent_2" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent3" ).hover(
	  function() {
	  	$( ".timelinecontent" ).removeClass("is-show");
	    $( ".timelinecontent_3" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent4" ).hover(
	  function() {
	  	$( ".timelinecontent" ).removeClass("is-show");
	    $( ".timelinecontent_4" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent5" ).hover(
	  function() {
	  	$( ".timelinecontent" ).removeClass("is-show");
	    $( ".timelinecontent_5" ).addClass("is-show");
	  }
	);

	$( ".js-open-timelinecontent6" ).hover(
	  function() {
	  	$(".timelinecontent").removeClass("is-show")
	    $( ".timelinecontent_6" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent7" ).hover(
	  function() {
	  	$(".timelinecontent").removeClass("is-show")
	    $( ".timelinecontent_7" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent8" ).hover(
	  function() {
	  	$(".timelinecontent").removeClass("is-show")
	    $( ".timelinecontent_8" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent9" ).hover(
	  function() {
	  	$(".timelinecontent").removeClass("is-show")
	    $( ".timelinecontent_9" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent10" ).hover(
	  function() {
	  	$(".timelinecontent").removeClass("is-show")
	    $( ".timelinecontent_10" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent11" ).hover(
	  function() {
	    $( ".timelinecontent_11" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent12" ).hover(
	  function() {
	    $( ".timelinecontent_12" ).addClass("is-show");
	  }
	);
	$( ".js-open-timelinecontent13" ).hover(
	  function() {
	    $( ".timelinecontent_13" ).addClass("is-show");
	  }
	);
});


