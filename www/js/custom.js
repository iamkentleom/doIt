$(document).ready(function(){
	$(".box2").hide();
	$("#goalEntered").click(function(){
		
		// $(".box2").css("width","80vmin");
		// $(".b1").css("visibility", "hidden");
		// $(".box").css("left", "0");
		$(".box").animate({left: '-50vw'},1000, "linear");
		// $(".box2").show(250);
		// $(".box2").css("left", "50%");
		// $(".box").hide(250);
		console.log("try");
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