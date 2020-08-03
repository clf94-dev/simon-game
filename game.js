var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userChosenColour;
var userClickedPattern=[];
var level=0;
var randomChosenColour;
var i=0;

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
      $("#" + currentColour).removeClass("pressed");
  },100);
}
function nextSequence() {
  i=0;
  userClickedPattern=[];

  var randomNumber = Math.floor(Math.random() * 4);
   randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#" + randomChosenColour).fadeOut().fadeIn();
  playSound(randomChosenColour);




}
$(".btn").click(function(){


  userChosenColour=this.id;
  console.log(userChosenColour);



  playSound(userChosenColour);
  animatePress(userChosenColour);
if (i<=level) {
  userClickedPattern[i]=userChosenColour;

    console.log(userClickedPattern);
    checkAnswer(i);
}

});


function playSound(name){
  switch (name) {
    case "red":
      var audio_r = new Audio("sounds/red.mp3");
      audio_r.play();
      break;
    case "blue":
      var audio_b = new Audio("sounds/blue.mp3");
      audio_b.play();
      break;
    case "green":
      var audio_g = new Audio("sounds/green.mp3");
      audio_g.play();
      break;
    case "yellow":
      var audio_y = new Audio("sounds/yellow.mp3");
      audio_y.play();
      break;
    default:
      var audio_w = new Audio("sounds/wrong.mp3");
      audio_w.play();

  }

}
$("body").keydown(function (){

  level=0;
  i=0;
  userClickedPattern=[];
  gamePattern=[];
  $("h1#level-title").html("Level " + level);
  nextSequence();
});

function checkAnswer(currentLevel)
{
  if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
    console.log ("success");
i++;
if (currentLevel===level){
setTimeout( function(){nextSequence(); },1000);
 level++;
 $("h1#level-title").html("Level " + level);
   }

  } else {
console.log("wrong");
playSound("wrong");
$("body").addClass("game-over");
$("h1").html("Game Over, Press Any Key to Restart");
setTimeout(function (){$("body").removeClass("game-over")},200);
  }
}
