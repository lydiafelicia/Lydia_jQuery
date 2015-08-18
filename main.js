$(document).ready(function() {

// 1. Create a welcome greeting to the user by taking the firstname and lastname the user input on the form/
	/* function welcomeName( first, last ) {


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
			alert("too long!")
		}

	}); */

//Newsletter
$("#newsletter_button").click (function () {
        $(".error").hide();

        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 
        var emailaddressVal = $("#useremail").val();
        if(emailaddressVal == '') {
            $("#useremail").after('<div class="error">Please enter your email address.</div>');
            hasError = true;
        }
 
        else if(!emailReg.test(emailaddressVal)) {
            $("#useremail").after('<div class="error">Enter a valid email address.</div>');
            hasError = true;
        }
 
        if(hasError == true) { 
        	return false;
		} else {
			$("#useremail").after('<div class="error">Thank you for joining our Newsletter!</div>');
		}
 });



//Navbar slide
	$("aside").slideDown(1000);

//form fade-in
	$("#form").fadeIn(2000);
});
    



