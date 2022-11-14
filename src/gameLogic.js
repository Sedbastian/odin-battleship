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
    board.push(column);
  }

  function placeShip(length, isVertical, x, y) {
		const ship = Ship(length, isVertical);
    if (ship.isVertical && y + ship.length > boardSize) {
      console.log("Ship is too large!");
      return "Ship is too large!";
    } else if (ship.isVertical && x + ship.length > boardSize) {
      console.log("Ship is too large!");
      return "Ship is too large!";
    }

    if (ship.isVertical && y + ship.length <= boardSize) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x][y + i] !== null) return "There's another ship there!";
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i] = ship;
			}
			return ship;
    } else if (!ship.isVertical && x + ship.length <= boardSize) {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x + i][y] !== null) return "There's another ship there!";
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y] = ship;
			}
			return ship;
    }
	}
	
	function receiveAttack(x, y) {
		this.board[x][y].hit();
		return this.board[x][y];
	}

  return { board, placeShip, receiveAttack };
}

export { Ship, Gameboard };
