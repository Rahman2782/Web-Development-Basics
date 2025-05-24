var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randDiceImage1 = `./images/dice${randomNumber1}.png`;
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randDiceImage2 = `./images/dice${randomNumber2}.png`;

console.log(randDiceImage1);
console.log(randDiceImage2);

document.querySelector(".img1").setAttribute("src", randDiceImage1);
document.querySelector(".img2").setAttribute("src", randDiceImage2);

winner(randomNumber1, randomNumber2);

function winner(p1, p2) {
    if (p1 > p2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
    }
    else if (p1 < p2) {
        document.querySelector("h1").textContent = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
    }
}

