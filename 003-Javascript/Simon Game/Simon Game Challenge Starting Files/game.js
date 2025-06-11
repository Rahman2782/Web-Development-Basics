var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = 0;

//when any button is clicked, its colorID is added to the back of an array
//and a sound+animation is played. Then the last index of the players array is
//sent to a function to check if they are correct.
$(".btn").click(function() {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    var last = userClickedPattern.length - 1;
    checkAnswer(last);
})

//adds the pressed css class and removes it after a 100ms timeout
function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed");

    setTimeout(function() {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
}

//resets the user's array and randomly selects a colour, then adds the colour
//to the end of the game array. Plays a brief animation to show the next button 
//to be pressed and updates the h1 to match the number of buttons to be 
//pressed in the coming sequence
function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4); //floor rounds to an int instead of giving a float
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $(`#level-title`).text(`Level ${level}`);
    level++;
}

//plays a sound from the sounds folder, throws an error if it cannot be played
function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play().catch(function(error) {
        console.log("ERROR: ", error);
    });
}

//if the ends of the 2 arrays match, then the game is continued until the entire
//sequence matches. Then the next sequence is generated after a brief timeout.
function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } //if wrongm the screen flashes and resets the game state
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $(`#level-title`).text("Game Over, Press Any Key to Restart");
        startOver();
    }
} 

function startOver() {
    start = 0;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

//starts the game if a key is pressed (only called once to start the game)
$(document).keypress(function () {
    start++;
    if(start === 1) {
        nextSequence();
    }
})
