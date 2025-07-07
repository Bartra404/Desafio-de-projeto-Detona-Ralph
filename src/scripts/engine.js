
const state = {
    view: {
        squares: document.querrySelectorAll(".square"),
        enemy: document.querrySelector("enemy"),
        timeLeft: document.querrySelector("#time-left"),
        score: document.querrySelector("#score"),
},
    value: {
        timerId: null,
        gameVelocity: 1000,
    },
}

function randomSquare () {
    state.view.square.forEach((squares) => {
        squares.classList.remove("enemy");
    })
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.square[randomNumber];
    randomSquare.classList.add("enemy");
}

function moveEnemy () {
    state.value.timerId = setInterval (randomSquare, state.value.gameValocity);
}

function addListenerHitBox () {
    state.view.square.forEach((squares) => {});
}

function initialize () {
    moveEnemy ();
}