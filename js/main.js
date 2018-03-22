/*
 name : forst 2015
 author : mohaiman
 version : 1.0.0
*/

$(document).ready(function(){
	$(".img_carousel").owlCarousel({
		items:1,
		pagination:true,
		navigation:true,
		slideSpeed:2000,
		theme:"shahali-theme",
		autoPlay:3000,
		navigationText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
	});
	
});