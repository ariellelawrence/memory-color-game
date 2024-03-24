let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let scoreDisplay = document.getElementById('score');
let summary = document.getElementById('display');
let scoreSummary = document.getElementById('summary');
let play = document.getElementById('play');
let square = document.getElementById('square');

let arr = [];
let guesses = [];
let score = 0;

newGame();

function newGame() {
    red.style.display = '';
    blue.style.display = '';
    green.style.display = '';
    yellow.style.display = '';
    square.style.display = '';
    scoreDisplay.style.display = '';
    summary.style.display = 'none';
    setTimeout(() => {
        newTurn(); 
    }, 1500);   
}

play.addEventListener("click", function() {
    location.reload();
});

red.addEventListener("click", function() {
    guesses.push(1);

    square.style.backgroundColor = 'red';
    square.style.borderColor = 'black';

    setTimeout(() => {
        square.style.backgroundColor = '';
        square.style.borderColor = '#7e50d4';
    }, 500);

    setTimeout(() => {
        check();
    }, 1700);
}) 

blue.addEventListener("click", function() {
    guesses.push(2);

    square.style.backgroundColor = 'blue';
    square.style.borderColor = 'black';

    setTimeout(() => {
        square.style.backgroundColor = '';
        square.style.borderColor = '#7e50d4';
    }, 500);

    setTimeout(() => {
        check();
    }, 1700);
})

green.addEventListener("click", function() {
    guesses.push(3);

    square.style.backgroundColor = 'green';
    square.style.borderColor = 'black';

    setTimeout(() => {
        square.style.backgroundColor = '';
        square.style.borderColor = '#7e50d4';
    }, 500);

    setTimeout(() => {
        check();
    }, 1700);
}) 

yellow.addEventListener("click", function() {
    guesses.push(4);

    square.style.backgroundColor = 'yellow';
    square.style.borderColor = 'black';

    setTimeout(() => {
        square.style.backgroundColor = '';
        square.style.borderColor = '#7e50d4';
    }, 500);

    setTimeout(() => {
        check();
    }, 1700);
}) 

function newTurn() {
    guesses.length = 0;
    arr.push(Math.floor(Math.random() * (4) + 1));
    start(0);
}

function start(el) {
    switch (arr[el]) {
        case 1: 
            square.style.backgroundColor = 'red';
            square.style.borderColor = 'black';
            
            setTimeout(() => {
                square.style.backgroundColor = '';
                square.style.borderColor = '#7e50d4';
            }, 500)

            setTimeout(() => {
                if (arr[el + 1] !== undefined) {
                    start(el + 1);
                } else {
                    guess(arr.length);
                }
            }, 700);
            break;
        
       case 2: 
            square.style.backgroundColor = 'blue';
            square.style.borderColor = 'black';
            
            setTimeout(() => {
                square.style.backgroundColor = '';
                square.style.borderColor = '#7e50d4';
            }, 500)

            setTimeout(() => {
                if (arr[el + 1] !== undefined) {
                    start(el + 1);
                } else {
                    guess(arr.length);
                }
            }, 700);
            break;

        case 3:
            square.style.backgroundColor = 'green';
            square.style.borderColor = 'black';
            
            setTimeout(() => {
                square.style.backgroundColor = '';
                square.style.borderColor = '#7e50d4';
            }, 500)

            setTimeout(() => {
                if (arr[el + 1] !== undefined) {
                    start(el + 1);
                } else {
                    guess(arr.length);
                }
            }, 700);
            break;

        case 4:
            square.style.backgroundColor = 'yellow';
            square.style.borderColor = 'black';
            
            setTimeout(() => {
                square.style.backgroundColor = '';
                square.style.borderColor = '#7e50d4';
            }, 500)

            setTimeout(() => {
                if (arr[el + 1] !== undefined) {
                    start(el + 1);
                } else {
                    guess(arr.length);
                }
            }, 700);
            break;
        }
    }

function guess(n) {
    if (n > 0) {
        red.disabled = false;
        blue.disabled = false;
        green.disabled = false;
        yellow.disabled = false;
    } else {
        red.disabled = true;
        blue.disabled = true;
        green.disabled = true;
        yellow.disabled = true;
        score++;
        scoreDisplay.textContent = "Score: " + score;
        setTimeout(() => {
            newTurn();
        }, 700);
    }
}

function check() {
    for (let i = 0; i < guesses.length; i++) {
       if (arr[i] !== guesses[i]) {
        lose();
       }
    }
    guess((arr.length) - (guesses.length));
}

function lose() {
    red.style.display = 'none';
    blue.style.display = 'none';
    green.style.display = 'none';
    yellow.style.display = 'none';
    square.style.display = 'none';
    scoreDisplay.style.display = 'none';
    summary.style.display = 'flex';
    scoreSummary.textContent = "Score: " + score;
}