const state = {
  view: {
    squares: document.querrySelectorAll(".square"),
    enemy: document.querrySelector(".enemy"),
    timeLeft: document.querrySelector("#time-left"),
    score: document.querrySelector("#score"),
  },
  value: {
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    curretTime: 60,
  },
  actions: {
    timerId: setInterval(randomSquare, 1000),
    countDownTimerId: setInterval (countDown, 1000),
  }

};

function countDown () {
  state.value.curretTime--;
  state.view.timeLeft.contendText = state.value.curretTime;
  
  if (state.value.curretTime <= 0) {
    clearInterval (state.actions.countDownTimerId);
    clearInterval (state.actions.timerId);
    alert ("Seu tempo acabou, sua pontuação é: " + state.value.result);
  }
}

function randomSquare() {
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });
  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
  state.value.hitPosition = randomSquare.id;
};

function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.value.hitPosition) {
        state.value.result++;
        state.view.score.textContent = state.value.result;
        state.value.hitPosition = null;
      }
    });
  });
};

function initialize() {
  addListenerHitBox();
};

initialize();