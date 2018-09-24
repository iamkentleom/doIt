$(document).ready(function(){
	$(".box2").hide();
	$("#goalEntered").click(function(){
		$(".box").animate({left: '-50vw'},500);
		$(".goal").css("background-image", "url('img/deadline.jpg')");
		$(".box2").show();
		$(".box2").animate({left: "50%"}, 500);
		$(".layer").css("background-color","rgba(0, 0, 0, 0.5)");
	});
	$("#backGoal").click(function(){
		$(".layer").css("background-color","rgba(0, 153, 51, 0.5)");
		$(".box2").animate({left: "150%"}, 500);
		$(".box2").hide();
		$(".goal").css("background-image", "url('img/goal.jpeg')");
		$(".box").animate({left: '50vw'},500);
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