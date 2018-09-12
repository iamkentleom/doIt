$(document).ready(function(){
	$(".box2").hide();
	$("#goalEntered").click(function(){
		
		// $(".box2").css("width","80vmin");
		// $(".b1").css("visibility", "hidden");
		// $(".box").css("left", "0");
		$(".box").animate({left: '-50vw'});
		// $(".box2").show(250);
		// $(".box2").css("left", "50%");
		// $(".box").hide(250);
		console.log("try");
	});
});