var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var randomNumber;
var chances = 5;

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}

function pick() {
    randomNumber = num[getRandomNumber(num.length)];
    document.getElementById('rand-num').innerText = randomNumber;
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('rand-num').style.display = 'block';
}

function checkNumber(selectedNumber) {
    var displayContainer = document.getElementById('display-container');
    var chancesDisplay = document.getElementById('chances');

    if (chances > 0) {
        if (selectedNumber == randomNumber) {
            displayContainer.innerText = "Winner! You got the number!";
        } else {
            chances--;
            displayContainer.innerText = "Wrong number, try again!";
            chancesDisplay.innerText = "Chances: " + chances;
        }
    }

    if (chances === 0 && selectedNumber != randomNumber) {
        displayContainer.innerText = "Game Over!";
    }
}

// Initialize buttons with onclick events
function initializeButtons() {
    for (var i = 1; i <= num.length; i++) {
        var button = document.getElementById('btn-' + i);
        button.onclick = function() {
            checkNumber(this.innerText);
        };
    }
}

// Initialize buttons on window load
window.onload = function() {
    initializeButtons();
}
