import { boardSize } from "./index.js";

function Ship(length, isVertical) {
  const timesHit = 0;
  function hit() {
    this.timesHit++;
  }
  function isSunk() {
    if (this.timesHit === this.length) {
      return true;
    } else {
      return false;
    }
  }
  return {
    length,
    isVertical,
    timesHit,
    hit,
    isSunk
  };
}

function Gameboard(boardSize) {
  const board = [];
  const column = [];

  for (let i = 0; i < boardSize; i++) {
    column.push(null);
  }
  for (let i = 0; i < boardSize; i++) {
    board.push([...column]);
  }

  const receivedHits = [];
  const receivedHitsColumn = [];
  for (let i = 0; i < boardSize; i++) {
    receivedHitsColumn.push(false);
  }
  for (let i = 0; i < boardSize; i++) {
    receivedHits.push([...receivedHitsColumn]);
  }

  const shipsLeft = 0;

  function placeShip(length, isVertical, x, y) {
    const ship = Ship(length, isVertical);

    if (ship.isVertical && y + ship.length > boardSize) {
      return "Ship is too large!";
    } else if (!ship.isVertical && x + ship.length > boardSize) {
      return "Ship is too large!";
    }

    if (ship.isVertical && y + ship.length <= boardSize) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x][y + i] !== null) return "There's another ship there!";
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i] = ship;
      }
      this.shipsLeft++;
      return ship;
    } else if (!ship.isVertical && x + ship.length <= boardSize) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x + i][y] !== null) return "There's another ship there!";
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y] = ship;
      }
      this.shipsLeft++;
      return ship;
    }
  }

  function receiveAttack(x, y) {
    if (this.receivedHits[x][y]) {
      return "¡Esa posición ya ha sido atacada!";
    } else {
      this.receivedHits[x][y] = true;
    }
    if (this.board[x][y] === null) {
      return "¡Agua!";
    } else {
      this.board[x][y].hit();
      if (this.board[x][y].isSunk()) {
        this.shipsLeft--;
        if (this.shipsLeft === 0) {
          return "¡Todos los barcos han sido hundidos!";
        } else {
          return "¡Barco hundido!";
        }
      }
      return "¡Barco tocado!";
    }
  }

  return { board, receivedHits, shipsLeft, placeShip, receiveAttack };
}

function Player(isFirstPlayer, name, gameboard) {
  return {
    isFirstPlayer,
    name,
    gameboard
  };
}

export { Ship, Gameboard, Player };
