import "./style.css";
import { Player, Gameboard } from "./gameLogic.js";
import {
  createToggleButton,
  showBoard,
  showAttackEnemyBoard,
  showAttackOwnBoard,
  winner
} from "./domModule.js";

const boardSize = 10;
const player1 = Player("Rinzai", Gameboard(boardSize));
const player2 = Player("nComputadora", Gameboard(boardSize));
let whoPlays = "player1";

populatePredefinedShips();

showBoard(player1.gameboard.board, "player1", "ownBoard", false);
showBoard(player2.gameboard.receivedHits, "player2", "enemyBoard", false);
if (player2.name !== "Computadora") {
  createToggleButton("player1");
}

showBoard(player2.gameboard.board, "player2", "ownBoard", true);
showBoard(player1.gameboard.receivedHits, "player1", "enemyBoard", true);
createToggleButton("player2", "hide");

function attack() {
  if (this.dataset.player === whoPlays) {
    return;
  }

  let result;
  if (this.dataset.player === "player2") {
    result = player2.gameboard.receiveAttack(this.dataset.x, this.dataset.y);
    console.log(result);
  } else if (this.dataset.player === "player1") {
    result = player1.gameboard.receiveAttack(this.dataset.x, this.dataset.y);
    console.log(result);
  }

  if (result === "¡Todos los barcos han sido hundidos!") {
    winner();
  }

  if (player2.name !== "Computadora") {
    if (whoPlays === "player1") {
      whoPlays = "player2";
    } else if (whoPlays === "player2") {
      whoPlays = "player1";
    }
  }

  showAttackEnemyBoard.call(this, result);
  showAttackOwnBoard.call(this, result);
}

function isComputerMove() {
  if (player2.name === "Computadora") {
    const compMoveObject = computerMove();

    // Show Computer Move:
    const attackedSquare = document.querySelector(
      `:not(.notAttacked)[data-player="player1"][data-x="${compMoveObject.x}"][data-y="${compMoveObject.y}"]`
    );
    attackedSquare.textContent = "\u{1F7CF}";
    attackedSquare.classList.add("attacked");
    attackedSquare.classList.add("attackedTrans");
    attackedSquare.addEventListener("transitionend", () => {
      attackedSquare.classList.remove("attackedTrans");
    });
    if (compMoveObject.result === "¡Agua!") {
      attackedSquare.classList.remove("water");
      attackedSquare.classList.add("water");
      console.log("here");
    } else if (compMoveObject.result === "¡Barco tocado!") {
      attackedSquare.classList.add("ship");
    } else if (compMoveObject.result === "¡Barco hundido!") {
      attackedSquare.classList.add("sunkenShip");
    } else if (
      compMoveObject.result === "¡Todos los barcos han sido hundidos!"
    ) {
      attackedSquare.classList.add("sunkenShip");
    }

    if (compMoveObject.result === "¡Todos los barcos han sido hundidos!") {
      whoPlays = "player2";
      winner();
    }
  }
}

function computerMove() {
  let x;
  let y;
  do {
    x = Math.floor(Math.random() * boardSize);
    y = Math.floor(Math.random() * boardSize);
  } while (player1.gameboard.receivedHits[x][y] === true);
  const result = player1.gameboard.receiveAttack(x, y);
  return { result, x, y };
}

function populatePredefinedShips() {
  player1.gameboard.placeShip(5, true, 0, 0);
  player1.gameboard.placeShip(4, true, 2, 0);
  player1.gameboard.placeShip(3, true, 4, 0);
  player1.gameboard.placeShip(2, true, 6, 0);
  player1.gameboard.placeShip(1, true, 8, 0);

  player2.gameboard.placeShip(5, false, 0, 0);
  player2.gameboard.placeShip(4, false, 0, 2);
  player2.gameboard.placeShip(3, false, 0, 4);
  player2.gameboard.placeShip(2, false, 0, 6);
  player2.gameboard.placeShip(1, false, 0, 8);
}

export { player1, player2, whoPlays, attack, boardSize, isComputerMove };
