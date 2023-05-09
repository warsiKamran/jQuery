// selecting elements
// $("h1").addClass("big-heading");
// $("h1").removeClass("big-heading");
// $("button");


//adding multiple classes
// $("h1").addClass("big-heading margin-50");
// $("button").addClass("button-style");


//manipulating text
// $("h1").text("bye");
// $("button").text("Don't click me");
// $("button").html("<em>click me</em>");


//manipulating attributes
// $("a").attr("href", "https://www.facebook.com");


//adding event listeners
$("h1").click(function(){
    $("h1").css("color", "purple");
});

$("button").click(function(){
    $("h1").css("color", "red");
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});