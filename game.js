
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

//empty array with the name userClickedPattern.
var userClickedPattern = [];

//Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  //uupdate the userClickedPattern
  userClickedPattern.push(userChosenColour);

  //console.log(userClickedPattern);

});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}