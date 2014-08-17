$(document).ready(function() {
 		
	$("a.btn").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500
    });
    return false;
	});

});


