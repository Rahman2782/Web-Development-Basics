//the event listener calls a function whenever the event occurs

var numOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //instructions for when the button is clicked
        alert('I got clicked!');
    });
}



