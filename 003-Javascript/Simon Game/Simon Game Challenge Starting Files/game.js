var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = 0;

$(".btn").click(function() {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    var last = userClickedPattern.length - 1;
    checkAnswer(last);
})

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed");

    setTimeout(function() {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $(`#level-title`).text(`Level ${level}`);
    level++;

}

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play().catch(function(error) {
        console.log("ERROR: ", error);
    });
}

function checkAnswer(currentLevel) {
    console.log(currentLevel);
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
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

$(document).keypress(function () {
    start++;
    if(start === 1) {
        nextSequence();
    }
})
