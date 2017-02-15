

$(function() {

	$('#tabs_menu li:not(:first)').addClass('active');
	$('.container:not(:first)').hide();

	$('#tabs_menu li a').click(function(){

    	var links = $(this).attr('href');
    	$('#tabs_menu li').addClass('active');
    	$(this).parent().removeClass('active');
    	$('.container').hide();
    	$(links).fadeIn('300');
    	return false;
	});

});




