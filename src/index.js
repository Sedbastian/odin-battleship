import "./style.css";
import { Player, Gameboard } from "./gameLogic.js";
import {
  placeShipsMessage,
  removePlaceShipsElements,
  showShipsToPlace,
  showBoard,
  showAttackEnemyBoard,
  showAttackOwnBoard,
  createToggleButton,
  winner
} from "./domModule.js";

let whoPlays = "player1";
initializeGame(10, "Rinzai", "Selassie");

function initializeGame(boardSize, player1name, player2name) {
  const player1 = Player(player1name, Gameboard(boardSize));
  const player2 = Player(player2name, Gameboard(boardSize));

  placeShips(player1, player2, "player1", 5, Gameboard(boardSize), boardSize);
}

function placeShips(
  player1,
  player2,
  playerTurn,
  numberOfShipsToPlace,
  shipsToPlace,
  boardSize
) {
  if (playerTurn === "player1") {
    placeShipsMessage(player1.name, numberOfShipsToPlace);
  } else if (playerTurn === "player2") {
    placeShipsMessage(player2.name, numberOfShipsToPlace);
  }

  shipsToPlace.placeShip(1, 5, true, 0, 0);
  shipsToPlace.placeShip(2, 4, true, 2, 0);
  shipsToPlace.placeShip(3, 3, true, 4, 0);
  shipsToPlace.placeShip(4, 2, true, 6, 0);
  shipsToPlace.placeShip(5, 1, true, 8, 0);

  showShipsToPlace(
    shipsToPlace.board,
    playerTurn,
    "verticalShipsToPlace",
    false
  );

  showShipsToPlace(
    shipsToPlace.board,
    playerTurn,
    "horizontalShipsToPlace",
    true
  );

  showBoard(
    player1,
    player2,
    playerTurn,
    "ownBoard",
    false,
    boardSize,
    true,
    numberOfShipsToPlace,
    shipsToPlace,
    player2.name
  );
}

function battleBegins(player1, player2, boardSize) {
  removePlaceShipsElements();
  alert(`Empieza ${player1.name}`);

  // Show boards
  showBoard(player1, player2, "player1", "ownBoard", false, boardSize);
  showBoard(player1, player2, "player2", "enemyBoard", false, boardSize);
  if (player2.name !== "Computadora") {
    createToggleButton("player1", player1.name, player2.name);
  }

  showBoard(player1, player2, "player2", "ownBoard", true, boardSize);
  showBoard(player1, player2, "player1", "enemyBoard", true, boardSize);
  createToggleButton("player2", player1.name, player2.name, "hide");
}

function attack(player1, player2, boardSize) {
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
    setTimeout(() => {
      winner(player1.name, player2.name);
    }, 0);

    return;
  }

  if (player2.name !== "Computadora") {
    if (whoPlays === "player1") {
      whoPlays = "player2";
    } else if (whoPlays === "player2") {
      whoPlays = "player1";
    }
  }
  showAttackEnemyBoard.call(this, player1, result, player2.name, boardSize);
  showAttackOwnBoard.call(this, result);
}

export { whoPlays, placeShips, battleBegins, attack };
