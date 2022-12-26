import { attack, player1, player2, whoPlays } from "./index.js";
import { computerMove } from "./gameLogic.js";

function createToggleButton(player, hide) {
  const button = document.createElement("button");
  button.classList.add("toggleBoards");
  if (hide) {
    button.classList.add("hidden");
  }
  button.dataset.player = player;
  button.textContent = "Esconder tableros y cambiar turno";
  button.addEventListener("click", toggleBoards);
  document.querySelector("body").appendChild(button);
}

function showShipsToPlace(board, whoseShips, typeOfBoard, isHidden) {
  let squareDragged;
  const gameboardDiv = document.createElement("div");
  gameboardDiv.classList.add("gameboard");
  gameboardDiv.classList.add(whoseShips);
  gameboardDiv.classList.add(typeOfBoard);
  if (isHidden) {
    gameboardDiv.classList.add("hidden");
  }
  let shipsNumbering = {};
  for (let i = 0; i < board.length; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");
    columnDiv.draggable = true;
    columnDiv.addEventListener("dragstart", function(event) {
      event.dataTransfer.setData("text/plain", `${squareDragged}`);
    });
    for (let j = 0; j < board[i].length; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.player = whoseShips;
      square.dataset.x = i;
      square.dataset.y = j;
      if (board[i][j] === null) {
        square.style.display = "none";
        // square.classList.add("water");
      } else if (typeof board[i][j] === "object") {
        square.textContent = "B";
        square.classList.add("ship");
        square.dataset.shipId = board[i][j].shipID;

        if (shipsNumbering[`shipID${board[i][j].shipID}`] === undefined) {
          shipsNumbering[`shipID${board[i][j].shipID}`] = 1;
        }
        square.dataset.shipSquareNumber =
          shipsNumbering[`shipID${board[i][j].shipID}`];
        shipsNumbering[`shipID${board[i][j].shipID}`]++;

        square.addEventListener("mousedown", function(event) {
          squareDragged = event.target.dataset.shipSquareNumber;
        });
      }
      columnDiv.appendChild(square);
    }
    gameboardDiv.appendChild(columnDiv);
  }
  document.querySelector("main").appendChild(gameboardDiv);
}

function showBoard(board, whoseShips, typeOfBoard, isHidden) {
  const gameboardDiv = document.createElement("div");
  gameboardDiv.classList.add("gameboard");
  gameboardDiv.classList.add(whoseShips);
  gameboardDiv.classList.add(typeOfBoard);
  if (isHidden) {
    gameboardDiv.classList.add("hidden");
  }
  let shipsNumbering = {};
  for (let i = 0; i < board.length; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");
    for (let j = 0; j < board[i].length; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.player = whoseShips;
      square.dataset.x = i;
      square.dataset.y = j;
      if (board[i][j] === null) {
        square.textContent = "A";
        square.classList.add("water");

        square.addEventListener("dragenter", function(event) {
          event.preventDefault();
        });
        square.addEventListener("dragover", function(event) {
          event.preventDefault();
        });
        square.addEventListener("drop", function(event) {
          console.log(event.dataTransfer.getData("text/plain"));
        });
      } else if (board[i][j] === false) {
        square.textContent = "?";
        square.classList.add("notAttacked");
        square.addEventListener("click", attack);
      } else if (typeof board[i][j] === "object") {
        square.textContent = "B";
        square.classList.add("ship");
        square.dataset.shipId = board[i][j].shipID;

        if (shipsNumbering[`shipID${board[i][j].shipID}`] === undefined) {
          shipsNumbering[`shipID${board[i][j].shipID}`] = 1;
        }
        square.dataset.shipSquareNumber =
          shipsNumbering[`shipID${board[i][j].shipID}`];
        shipsNumbering[`shipID${board[i][j].shipID}`]++;
      }
      columnDiv.appendChild(square);
    }
    gameboardDiv.appendChild(columnDiv);
  }
  document.querySelector("main").appendChild(gameboardDiv);
}

function showAttackEnemyBoard(result) {
  if (result === "¡Agua!") {
    this.addEventListener("transitionend", isComputerMove);
    this.classList.add("water");
    this.classList.add("waterTrans");
    this.textContent = "A";
  } else if (result === "¡Barco tocado!") {
    this.addEventListener("transitionend", isComputerMove);
    this.classList.add("ship");
    this.classList.add("shipTrans");
    this.textContent = "B";
  } else if (result === "¡Barco hundido!") {
    this.addEventListener("transitionend", isComputerMove);
    this.classList.add("sunkenShip");
    this.classList.add("sunkenShipTrans");
    this.textContent = "X";
  } else if (result === "¡Todos los barcos han sido hundidos!") {
    this.classList.add("sunkenShip");
    this.classList.add("sunkenShipTrans");
    this.textContent = "X";
  }

  function isComputerMove() {
    if (player2.name === "Computadora") {
      function transitionEndCallback() {
        attackedSquare.classList.remove("attackedTrans");

        if (compMoveObject.result === "¡Todos los barcos han sido hundidos!") {
          whoPlays = "player2";
          winner();
        }
        attackedSquare.removeEventListener(
          "transitionend",
          transitionEndCallback
        );
      }

      const compMoveObject = computerMove();

      // Show Computer Move:
      const attackedSquare = document.querySelector(
        `:not(.notAttacked)[data-player="player1"][data-x="${compMoveObject.x}"][data-y="${compMoveObject.y}"]`
      );
      attackedSquare.textContent = "\u{1F7CF}";
      attackedSquare.classList.add("attacked");
      attackedSquare.classList.add("attackedTrans");
      attackedSquare.addEventListener("transitionend", transitionEndCallback);
    }
  }
}

function showAttackOwnBoard() {
  const attackedSquare = document.querySelector(
    `:not(.notAttacked)[data-player="${this.dataset.player}"][data-x="${this.dataset.x}"][data-y="${this.dataset.y}"]`
  );
  attackedSquare.textContent = "\u{1F7CF}";
  attackedSquare.classList.add("attacked");
  attackedSquare.classList.add("lastAttacked");
}

function toggleBoards() {
  const player = this.dataset.player;

  let otherPlayer;
  let playerName;
  let otherPlayerName;

  if (player === "player1") {
    otherPlayer = "player2";
    playerName = player1.name;
    otherPlayerName = player2.name;
  } else {
    otherPlayer = "player1";
    playerName = player2.name;
    otherPlayerName = player1.name;
  }

  if (player === whoPlays) {
    showMakeYourMove(whoPlays);
    return;
  }

  // Hide:
  const ownBoardToHide = document.querySelector(
    `.gameboard.${player}.ownBoard`
  );
  ownBoardToHide.classList.toggle("hidden");

  const enemyBoardToHide = document.querySelector(
    `.gameboard.${otherPlayer}.enemyBoard`
  );
  enemyBoardToHide.classList.toggle("hidden");

  const toggleButtonToHide = document.querySelector(
    `button[data-player="${player}"]`
  );
  toggleButtonToHide.classList.toggle("hidden");

  const lastAttacked = document.querySelector(
    `[data-player="${player}"].lastAttacked`
  );
  if (lastAttacked) {
    lastAttacked.classList.remove("lastAttacked");
  }

  // Show:
  const showButton = document.createElement("button");
  showButton.classList.add("showHiddenBoards");
  showButton.textContent = `Mostrar tableros de ${otherPlayerName}`;
  showButton.addEventListener("click", showHiddenBoards);
  document.querySelector("main").appendChild(showButton);

  function showMakeYourMove() {
    alert(`¡Todavía no hiciste tu jugada, ${playerName}!`);
  }

  function showHiddenBoards() {
    const ownBoardToShow = document.querySelector(
      `.gameboard.${otherPlayer}.ownBoard`
    );
    ownBoardToShow.classList.toggle("hidden");

    const enemyBoardToShow = document.querySelector(
      `.gameboard.${player}.enemyBoard`
    );
    enemyBoardToShow.classList.toggle("hidden");

    const toggleButtonToShow = document.querySelector(
      `button[data-player="${otherPlayer}"]`
    );
    toggleButtonToShow.classList.toggle("hidden");

    showButton.classList.toggle("hidden");
  }
}

function winner() {
  let whoWins;
  if (whoPlays === "player1") {
    whoWins = player1.name;
  } else if (whoPlays === "player2") {
    whoWins = player2.name;
  }
  alert(`Ganó ${whoWins}.  ¡Hundió todos los barcos!`);
}

export {
  createToggleButton,
  showShipsToPlace,
  showBoard,
  showAttackEnemyBoard,
  showAttackOwnBoard,
  winner
};
