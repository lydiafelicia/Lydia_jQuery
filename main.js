$(document).ready(function() {

// 1. Create a welcome greeting to the user by taking the firstname and lastname the user input on the form/
	function welcomeName( first, last ) {


		return ("Hello " + first + " " + last + " welcome to the site! ");
	}

	$("#input_button").click(function(){
	var first= $("#firstname").val();
	var last= $("#lastname").val();
	var fullname = welcomeName(first,last);
	$('#result').text(fullname);
	});

// 2. Sending alert onclick with two different messages based on the character length using if function.

	$("#tweet_button").click (function(){
	var tweet = $("#your_tweet").val();

		if (tweet.length < 140) {
			alert("tweeted!");
		} else {
			alert ("too long!")
		}

	});

});