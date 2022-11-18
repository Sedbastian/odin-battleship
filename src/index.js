import "./style.css";
import { Player, Gameboard } from "./gameLogic.js";
import {
  showBoard,
  showAttackEnemyBoard,
  showAttackOwnBoard
} from "./domModule.js";

let boardSize = 10;
const player1 = Player(true, "Rinzai", Gameboard(boardSize));
const player2 = Player(false, "Computer", Gameboard(boardSize));

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

showBoard(player1.gameboard.board, "player1", "ownBoard");
showBoard(player2.gameboard.receivedHits, "player2", "enemyBoard");

showBoard(player2.gameboard.board, "player2", "ownBoard");
showBoard(player1.gameboard.receivedHits, "player1", "enemyBoard");

let turn = "player1";

function attack() {
  if (this.dataset.player === "player2") {
    const result = player2.gameboard.receiveAttack(
      this.dataset.x,
      this.dataset.y
    );
    console.log(result);
    showAttackEnemyBoard.call(this, result);
    showAttackOwnBoard.call(this, result);
  } else if (this.dataset.player === "player1") {
    const result = player1.gameboard.receiveAttack(
      this.dataset.x,
      this.dataset.y
    );
    console.log(result);
    showAttackEnemyBoard.call(this, result);
    showAttackOwnBoard.call(this, result);
  }
}

function computerMove() {
  let x;
  let y;
  do {
    x = Math.floor(Math.random() * boardSize);
    y = Math.floor(Math.random() * boardSize);
  } while (player1.gameboard.receivedHits[x][y] === true);
  player1.gameboard.receiveAttack(x, y);
}

export { attack, boardSize };
