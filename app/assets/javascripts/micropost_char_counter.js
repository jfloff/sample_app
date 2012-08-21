//TODO: Didn't work putting this into the coffeescript file (micropost.js.coffee). Find a better place for this

function counter () {
	var maxChar = 140;
	var count = $(this).val().length;
	var remainingChar = maxChar - count;
	
	$("#micropost_char_count").html(remainingChar);
	if(remainingChar > 0) {
		$("#micropost_char_count").css('color', 'green');
	} else {
		$("#micropost_char_count").css('color', 'red');
	}
}

$("#micropost_content").ready(counter);
$("#micropost_content").live('keyup', counter);