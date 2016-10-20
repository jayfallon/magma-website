$(function(){
	$('.texture-image div').css('height', $('.texture-image div').width());
	$( window ).resize(function() {
	  $('.texture-image div').css('height', $('.texture-image div').width());
	});
});
