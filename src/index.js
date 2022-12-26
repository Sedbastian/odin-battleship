import "./style.css";
import { Player, Gameboard } from "./gameLogic.js";
import {
  showShipsToPlace,
  showBoard,
  showAttackEnemyBoard,
  showAttackOwnBoard,
  createToggleButton,
  winner
} from "./domModule.js";

const boardSize = 10;
const shipsToPlace = Player("ShipsToPlace", Gameboard(boardSize));
const player1 = Player("Rinzai", Gameboard(boardSize));
const player2 = Player("Computadora", Gameboard(boardSize));
let whoPlays = "player1";

shipsToPlace.gameboard.placeShip(1, 5, true, 0, 0);
shipsToPlace.gameboard.placeShip(2, 4, true, 2, 0);
shipsToPlace.gameboard.placeShip(3, 3, true, 4, 0);
shipsToPlace.gameboard.placeShip(4, 2, true, 6, 0);
shipsToPlace.gameboard.placeShip(5, 1, true, 8, 0);

showShipsToPlace(
  shipsToPlace.gameboard.board,
  "player1",
  "shipsToPlace",
  false
);

showBoard(player1.gameboard.board, "player1", "ownBoard", false);

// showBoard(player1.gameboard.board, "player1", "ownBoard", false);
// showBoard(player2.gameboard.receivedHits, "player2", "enemyBoard", false);
// if (player2.name !== "Computadora") {
//   createToggleButton("player1");
// }

// showBoard(player2.gameboard.board, "player2", "ownBoard", true);
// showBoard(player1.gameboard.receivedHits, "player1", "enemyBoard", true);
// createToggleButton("player2", "hide");

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
    return;
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

export { player1, player2, whoPlays, attack, boardSize };
