$(document).ready(function(){
	$(".b2,.b3").hide();
	$("#goalEntered").click(function(){
		$(".b1").animate({left: '-50vw'},500);
		$(".goal").css("background-image", "url('img/deadline.jpeg')");
		$(".b2").show();
		$(".b2").animate({left: "50%"}, 500);
		$(".layer").css("background-color","rgba(0, 0, 0, 0.5)");
	});
	$("#backGoal").click(function(){
		$(".layer").css("background-color","rgba(0, 0, 0, 0.5)");
		$(".b2").animate({left: "150%"}, 500);
		$(".b2").hide(250);
		$(".goal").css("background-image", "url('img/goal.jpeg')");
		$(".b1").animate({left: '50vw'},500);
	});
	$("#dateEntered").click(function(){
		$(".b2").animate({left: '-50vw'},500);
		$(".goal").css("background-image", "url('img/supervisor.jpeg')");
		$(".b3").show();
		$(".b3").animate({left: "50%"}, 500);
		$(".layer").css("background-color","rgba(0, 0, 0, 0.5)");
	});
	$("#backDate").click(function(){
		$(".layer").css("background-color","rgba(0, 0, 0, 0.5)");
		$(".b3").animate({left: "150%"}, 500);
		$(".b3").hide(250);
		$(".goal").css("background-image", "url('img/deadline.jpeg')");
		$(".b2").animate({left: '50vw'},500);
	});

});

function writeTextFile(filepath, output) {
	var txtFile = new File(filepath);
	txtFile.open("w"); //
	txtFile.writeln(output);
	txtFile.close();
}

function readTextFile(filepath) {
	var str = "";
	var txtFile = new File(filepath);
	txtFile.open("r");
	while (!txtFile.eof) {
		// read each line of text
		str += txtFile.readln() + "\n";
	}
	return str;
}