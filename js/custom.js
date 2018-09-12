$(document).ready(function(){
	$(".box2").hide();
	$("#goalEntered").click(function(){
		
		// $(".box2").css("width","80vmin");
		// $(".b1").css("visibility", "hidden");
		$(".box").css("left", "0");
		$(".box2").show();
		$(".box2").css("left", "50%");
		$(".box").hide();
		console.log("try");
	});
});