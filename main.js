$(document).ready(function() {


//Cheatsheet for JS assignment
// 1. Create a welcome greeting to the user by taking the firstname and lastname the user input on the form with return function and jQuery
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

// 3. Make additional article form by clicking linked button with .append
 /* function makeArticle(e){

	$("#input_output_example").append("New Text");
	$("#input_output_field").val("New Text");
	$("#content").append("<article> <h1>Title</h1> <h2>Author</h2> <p>context of article</p></article> <hr/>");
	 }

	$("#input_output_button").click(makeArticle); */

// 4. append paragraph that show the clicked button's name

	/* $('clickbutton').click(function(e) {
		var currentTarget = $(e.currentTarget),
	appendText = currentTarget.text();

		$('#result').append("<p>" + appendText + "</p>");
	 }); */



//Newsletter email verify function
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
            $("#useremail").after('<div class="error">Please enter a valid email address.</div>');
            hasError = true;
        }
 
        if(hasError == true) { 
        	return false;
		} else {
			alert("Thank you for joining our Newsletter!");
		}
 });



//Navbar slide
	$("aside").slideDown(1000);

//form fade-in
	$("#form").fadeIn(1000);
});
    



