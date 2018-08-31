'use strict';

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
        FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
}


function changeUser(response) {
	console.log(response);
	// hide the login button
    $(".originalLogIn").hide();
	$(".facebookLogin").hide();

	$(".FBLoggedInPlaceHolder").addClass("jumbotron");

    $(".FBsuccess").text("Success!");
	$(".FBinsertname").text("Welcome " + response.name + "!");

	$(".FBPhoto").attr('src',response.picture.data.url);   // don't include "" here


    $(".FBLoggedInPlaceHolder a").append("<br><br><button type=\"submit\" class=\"btn btn-primary centered\" style=\"width: 80vw; max-height:50px; max-width:300px; font-size: 23px; margin-left:7%;\">Continue with MoveSafe</button>");
}