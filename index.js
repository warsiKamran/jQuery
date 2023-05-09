// selecting elements
$("h1").addClass("big-heading");
$("h1").removeClass("big-heading");
$("button");


// adding multiple classes
$("h1").addClass("big-heading margin-50");
$("button").addClass("button-style");


// manipulating text
$("h1").text("bye");
$("button").text("Don't click me");
$("button").html("<em>click me</em>");


// manipulating attributes
$("a").attr("href", "https://www.facebook.com");


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

//another way of initialising event listeners
$(document).on("keypress", function(event){
    $("h1").text(event.key);
});


//animations
$("button").on("click", function(){
    $("h1").toggle();
});

$("button").on("click", function(){
    $("h1").fadeToggle();
});

$("button").on("click", function(){
    $("h1").slideToggle();
});

$("button").on("click", function(){
    $("h1").animate({margin: 200});         //takes only attributes which accepts numeric values
});

$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});         //takes only attributes which accepts numeric values
});


//chaining the animations
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({margin:200});         //takes only attributes which accepts numeric values
});
