$(document).ready(function() {
	// $(".btn").click(function(){
	// 		//console.log('test');
	// 		var selected = $(this).attr('href');	
	// 		$.scrollTo(selected, 500);		
	// 		return false;
	// 	});
 		$("a.btn").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500
        });
        return false;
    });


});


