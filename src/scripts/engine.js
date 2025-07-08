const state = {
  view: {
    squares: document.querrySelectorAll(".square"),
    enemy: document.querrySelector(".enemy"),
    timeLeft: document.querrySelector("#time-left"),
    score: document.querrySelector("#score"),
  },
  value: {
    timerId: null,
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
  },
};

function randomSquare() {
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });
  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
  state.value.hitPosition = randomSquare.id;
}

function moveEnemy() {
  state.value.timerId = setInterval(randomSquare, state.value.gameValocity);
}

function addListenerHitBox() {
  state.view.square.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.value.hitPosition) {
        state.value.result++;
        state.view.score.textContent = state.value.result;
        state.value.hitPosition = null;
      }
    });
  });
}

function initialize() {
  moveEnemy();
  addListenerHitBox();
}

initialize();
