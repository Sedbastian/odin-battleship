function Ship(shipID, length, isVertical) {
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
    shipID,
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

  function placeShip(shipID, length, isVertical, x, y) {
    const ship = Ship(shipID, length, isVertical);
    let fullShipCoordinates = [];

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
        fullShipCoordinates.push([x, y + i]);
      }
      this.shipsLeft++;
      return fullShipCoordinates;
    } else if (!ship.isVertical && x + ship.length <= boardSize) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x + i][y] !== null) return "There's another ship there!";
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y] = ship;
        fullShipCoordinates.push([x + i, y]);
      }
      this.shipsLeft++;
      return fullShipCoordinates;
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

  function removeShip(shipID) {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] !== null) {
          if (this.board[i][j].shipID === shipID) {
            this.board[i][j] = null;
          }
        }
      }
    }
  }

  return {
    board,
    receivedHits,
    shipsLeft,
    placeShip,
    removeShip,
    receiveAttack
  };
}

function Player(name, gameboard) {
  return {
    name,
    gameboard
  };
}

function placeRandomShips(player, boardSize) {
  for (let i = 0; i < 5; i++) {
    let x;
    let y;
    let isVertical;
    do {
      x = Math.floor(Math.random() * boardSize);
      y = Math.floor(Math.random() * boardSize);
      if ((x + 1) % 2 === 0) {
        isVertical = true;
      } else {
        isVertical = false;
      }
    } while (
      typeof player.gameboard.placeShip(i + 1, 5 - i, isVertical, x, y) !==
      "object"
    );
  }
}

function computerAttack(boardSize, player) {
  let x;
  let y;
  do {
    x = Math.floor(Math.random() * boardSize);
    y = Math.floor(Math.random() * boardSize);
  } while (player.gameboard.receivedHits[x][y] === true);
  const result = player.gameboard.receiveAttack(x, y);
  return { result, x, y };
}

export { Ship, Gameboard, Player, placeRandomShips, computerAttack };
