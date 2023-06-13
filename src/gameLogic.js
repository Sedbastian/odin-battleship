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
				if (this.board[x][y + i] !== null)
					return "There's another ship there!";
			}
			for (let i = 0; i < ship.length; i++) {
				this.board[x][y + i] = ship;
				fullShipCoordinates.push([x, y + i]);
			}
			this.shipsLeft++;
			return fullShipCoordinates;
		} else if (!ship.isVertical && x + ship.length <= boardSize) {
			for (let i = 0; i < ship.length; i++) {
				if (this.board[x + i][y] !== null)
					return "There's another ship there!";
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
			typeof player.gameboard.placeShip(
				i + 1,
				5 - i,
				isVertical,
				x,
				y
			) !== "object"
		);
	}
}

let fromAttackObj;
let iA = false;
let nextAttackDir;
let axisFound = false;
let firstHitIa;

function computerAttack(boardSize, player) {
	if (iA === false) {
		axisFound = false;
		fromAttackObj = randomAttack();
		if (fromAttackObj.result === "¡Barco tocado!") {
			iA = true;
			firstHitIa = {
				x: fromAttackObj.x,
				y: fromAttackObj.y
			};
			// if South of attacked square exists and has not been attacked then nextAttackDir:South
			if (
				fromAttackObj.y + 1 < boardSize &&
				player.gameboard.receivedHits[fromAttackObj.x][
					fromAttackObj.y + 1
				] === false
			) {
				nextAttackDir = { x: 0, y: 1 };
				// if North of attacked square exists and has not been attacked then nextAttackDir:North
			} else if (
				fromAttackObj.y - 1 >= 0 &&
				player.gameboard.receivedHits[fromAttackObj.x][
					fromAttackObj.y - 1
				] === false
			) {
				nextAttackDir = { x: 0, y: -1 };
				// if East of attacked square exists and has not been attacked then nextAttackDir:East
			} else if (
				fromAttackObj.x + 1 < boardSize &&
				player.gameboard.receivedHits[fromAttackObj.x + 1][
					fromAttackObj.y
				] === false
			) {
				nextAttackDir = { x: 1, y: 0 };
				// if West of attacked square exists and has not been attacked then nextAttackDir:West
			} else if (
				fromAttackObj.x - 1 >= 0 &&
				player.gameboard.receivedHits[fromAttackObj.x - 1][
					fromAttackObj.y
				] === false
			) {
				nextAttackDir = { x: -1, y: 0 };
			} else {
				iA = false;
			}
		}
	} else if (iA === true) {
		if (
			fromAttackObj.x + nextAttackDir.x < boardSize &&
			fromAttackObj.x + nextAttackDir.x >= 0
		) {
			fromAttackObj.x = fromAttackObj.x + nextAttackDir.x;
		} else {
			// Handle Out of Board Case
			fromAttackObj = randomAttack();
			iA = false;
			axisFound = false;
			return fromAttackObj;
		}

		if (
			fromAttackObj.y + nextAttackDir.y < boardSize &&
			fromAttackObj.y + nextAttackDir.y >= 0
		) {
			fromAttackObj.y = fromAttackObj.y + nextAttackDir.y;
		} else {
			// // Handle Out of Board Case
			fromAttackObj = randomAttack();
			iA = false;
			axisFound = false;
			return fromAttackObj;
		}

		fromAttackObj.result = player.gameboard.receiveAttack(
			fromAttackObj.x,
			fromAttackObj.y
		);
		// Faltaria caso: result: posicion ya atacada (entonces, cambiar de direccion d ataque)
		// O ya estaría contemplado?? con receivedHits[x][y]===false??
		if (fromAttackObj.result === "¡Barco tocado!") {
			if (axisFound === false) {
				axisFound = true;
			}
			if (
				fromAttackObj.x + nextAttackDir.x >= boardSize ||
				fromAttackObj.x + nextAttackDir.x < 0 ||
				fromAttackObj.y + nextAttackDir.y >= boardSize ||
				fromAttackObj.y + nextAttackDir.y < 0 ||
				player.gameboard.receivedHits[
					fromAttackObj.x + nextAttackDir.x
				][fromAttackObj.y + nextAttackDir.y] === true
			) {
				console.log("In!!!");
				if (nextAttackDir.x === 1) {
					nextAttackDir.x = -1;
				} else if (nextAttackDir.x === -1) {
					nextAttackDir.x = 1;
				}
				if (nextAttackDir.y === 1) {
					nextAttackDir.y = -1;
				} else if (nextAttackDir.y === -1) {
					nextAttackDir.y = 1;
				}
				const returnValueX = fromAttackObj.x;
				const returnValueY = fromAttackObj.y;

				fromAttackObj.x = firstHitIa.x;
				fromAttackObj.y = firstHitIa.y;
				return {
					result: "¡Agua!",
					x: returnValueX,
					y: returnValueY
				};
			}
		} else if (fromAttackObj.result === "¡Agua!") {
			// save fromAttackObj coordinates to return result object (because they will be changed)
			const returnValueX = fromAttackObj.x;
			const returnValueY = fromAttackObj.y;

			if (axisFound === true) {
				if (nextAttackDir.x === 1) {
					nextAttackDir.x = -1;
				} else if (nextAttackDir.x === -1) {
					nextAttackDir.x = 1;
				}
				if (nextAttackDir.y === 1) {
					nextAttackDir.y = -1;
				} else if (nextAttackDir.y === -1) {
					nextAttackDir.y = 1;
				}
				fromAttackObj.x = firstHitIa.x;
				fromAttackObj.y = firstHitIa.y;
			} else if (axisFound === false) {
				// First: save fromAttackObj coordinates to return and then make them as previous attack:

				fromAttackObj.x = fromAttackObj.x - nextAttackDir.x;
				fromAttackObj.y = fromAttackObj.y - nextAttackDir.y;

				// Second: change nextAttackDir:
				// SouthCase
				if (nextAttackDir.x === 0 && nextAttackDir.y === 1) {
					// if North of attacked square exists and has not been attacked then nextAttackDir:North
					if (
						fromAttackObj.y - 1 >= 0 &&
						player.gameboard.receivedHits[fromAttackObj.x][
							fromAttackObj.y - 1
						] === false
					) {
						nextAttackDir = { x: 0, y: -1 };
						// if East of attacked square exists and has not been attacked then nextAttackDir:East
					} else if (
						fromAttackObj.x + 1 < boardSize &&
						player.gameboard.receivedHits[fromAttackObj.x + 1][
							fromAttackObj.y
						] === false
					) {
						nextAttackDir = { x: 1, y: 0 };
						// if West of attacked square exists and has not been attacked then nextAttackDir:West
					} else if (
						fromAttackObj.x - 1 >= 0 &&
						player.gameboard.receivedHits[fromAttackObj.x - 1][
							fromAttackObj.y
						] === false
					) {
						nextAttackDir = { x: -1, y: 0 };
					} else {
						iA = false;
					}
				}
				// North Case
				else if (nextAttackDir.x === 0 && nextAttackDir.y === -1) {
					// if East of attacked square exists and has not been attacked then nextAttackDir:East
					if (
						fromAttackObj.x + 1 < boardSize &&
						player.gameboard.receivedHits[fromAttackObj.x + 1][
							fromAttackObj.y
						] === false
					) {
						nextAttackDir = { x: 1, y: 0 };
						// if West of attacked square exists and has not been attacked then nextAttackDir:West
					} else if (
						fromAttackObj.x - 1 >= 0 &&
						player.gameboard.receivedHits[fromAttackObj.x - 1][
							fromAttackObj.y
						] === false
					) {
						nextAttackDir = { x: -1, y: 0 };
					} else {
						iA = false;
					}
				}
				// East Case
				else if (nextAttackDir.x === 1 && nextAttackDir.y === 0) {
					if (
						fromAttackObj.x - 1 >= 0 &&
						player.gameboard.receivedHits[fromAttackObj.x - 1][
							fromAttackObj.y
						] === false
					) {
						nextAttackDir = { x: -1, y: 0 };
					} else {
						iA = false;
					}
				}
				// West Case
				else if (nextAttackDir.x === -1 && nextAttackDir.y === 0) {
					iA = false;
				}
			}

			return {
				result: "¡Agua!",
				x: returnValueX,
				y: returnValueY
			};
		} else {
			iA = false;
			axisFound = false;
		}
	}
	return fromAttackObj;

	function randomAttack() {
		let x;
		let y;
		do {
			x = Math.floor(Math.random() * boardSize);
			y = Math.floor(Math.random() * boardSize);
		} while (player.gameboard.receivedHits[x][y] === true);
		let result = player.gameboard.receiveAttack(x, y);
		return { result, x, y };
	}
}

export {
	Ship,
	Gameboard,
	Player,
	placeRandomShips,
	computerAttack,
	iA,
	nextAttackDir,
	firstHitIa,
	fromAttackObj
};
