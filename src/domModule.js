import {
	whoPlays,
	initializeGame,
	placeShips,
	battleBegins,
	attack
} from "./index.js";
import { Gameboard, placeRandomShips, computerAttack } from "./gameLogic.js";

function mainTitleAndGetNames() {
	const battleship = document.createElement("h1");
	chainFadeInS(null, battleship, "2s");
	battleship.textContent = "BATALLA NAVAL";

	const who = document.createElement("h2");
	chainFadeInS(battleship, who, "2s");
	who.textContent = "¿Quiénes van a jugar?";

	const divPlayer1 = document.createElement("div");
	chainFadeInS(who, divPlayer1, "0.5s");
	const name1 = document.createElement("div");
	name1.classList.add("name");

	name1.textContent = "Jugador/a 1:";
	divPlayer1.appendChild(name1);

	const player1input = document.createElement("input");
	player1input.setAttribute("placeholder", "Escribí tu nombre");
	divPlayer1.appendChild(player1input);

	const divPlayer2 = document.createElement("div");
	chainFadeInS(divPlayer1, divPlayer2, "0.5s");
	const name2 = document.createElement("div");
	name2.classList.add("name");
	name2.textContent = "Jugador/a 2:";
	divPlayer2.appendChild(name2);

	const player2input = document.createElement("input");
	player2input.value = "Computadora";
	divPlayer2.appendChild(player2input);

	const submitNames = document.createElement("button");
	chainFadeInS(divPlayer2, submitNames, "0.5s");
	submitNames.classList.add("submitNames");
	submitNames.textContent = "Listo! Posicionar Flota";
	submitNames.addEventListener("click", () => {
		// battleship.remove();
		// who.remove();
		// divPlayer1.remove();
		// divPlayer2.remove();
		// submitNames.remove();
		// version.remove();
		while (main.firstChild) {
			main.removeChild(main.firstChild);
		}
		initializeGame(player1input.value, player2input.value);
	});

	const version = document.createElement("div");
	chainFadeInS(submitNames, version, "1s");
	version.classList.add("version");
	version.textContent = "v0.1";

	const main = document.querySelector("main");
	main.appendChild(battleship);
	main.appendChild(who);
	main.appendChild(divPlayer1);
	main.appendChild(divPlayer2);
	main.appendChild(submitNames);
	main.appendChild(version);
}

function chainFadeInS(fromElement, toElementS, duration, timingFunction) {
	let timing;
	if (timingFunction) {
		timing = timingFunction;
	} else {
		timing = "ease-in-out";
	}

	if (toElementS === null || toElementS.length === 0) {
		return;
	} else if (toElementS.length === undefined) {
		toElementS.style.opacity = "0";
		if (fromElement) {
			fromElement.addEventListener("transitionend", () => {
				setTimeout(() => {
					toElementS.style.opacity = "1";
					toElementS.style.transition = `opacity ${duration} ${timing}`;
				}, 0);
			});
		} else {
			setTimeout(() => {
				toElementS.style.opacity = "1";
				toElementS.style.transition = `opacity ${duration} ${timing}`;
			}, 0);
		}
	} else if (toElementS.length > 0) {
		toElementS.forEach(element => {
			if (element) {
				element.style.opacity = "0";
			}
		});
		if (fromElement) {
			fromElement.addEventListener("transitionend", () => {
				setTimeout(() => {
					toElementS.forEach(element => {
						if (element) {
							element.style.opacity = "1";
							element.style.transition = `opacity ${duration} ${timing}`;
						}
					});
				}, 0);
			});
		} else {
			setTimeout(() => {
				toElementS.forEach(element => {
					if (element) {
						element.style.opacity = "1";
						element.style.transition = `opacity ${duration} ${timing}`;
					}
				});
			}, 0);
		}
	}
}

function createPlayersDivs(player2name) {
	playerDiv(1);
	if (player2name !== "Computadora") {
		playerDiv(2);
	}

	function playerDiv(playerNumber) {
		const playerDiv = document.createElement("div");
		playerDiv.classList.add("playerDiv");
		playerDiv.classList.add(`player${playerNumber}`);

		const boardsContainer = document.createElement("div");
		boardsContainer.classList.add("boardsContainer");
		playerDiv.appendChild(boardsContainer);

		const main = document.querySelector("main");
		main.appendChild(playerDiv);
	}
}

function placeShipsMessage(
	player1name,
	player2name,
	playerTurn,
	numberOfShipsToPlace
) {
	removePlaceShipsElements();

	let playerName;
	let otherPlayerName;
	if (playerTurn === "player1") {
		playerName = player1name;
		otherPlayerName = player2name;
	} else if (playerTurn === "player2") {
		playerName = player2name;
		otherPlayerName = player1name;
	}

	const messagesDiv = document.createElement("div");
	messagesDiv.classList.add("messages");
	messagesDiv.textContent = `${playerName}, posiciona tus ${numberOfShipsToPlace} barcos sobre las aguas...`;
	const playerDiv = document.querySelector(`.${playerTurn}`);
	playerDiv.prepend(messagesDiv);

	if (otherPlayerName !== "Computadora") {
		const messagesDiv2 = document.createElement("div");
		messagesDiv2.classList.add("messages");
		messagesDiv2.classList.add("messages2");
		messagesDiv2.textContent = `¡Que ${otherPlayerName} no vea tu tablero!`;
		messagesDiv.appendChild(messagesDiv2);
	}
}

function showShipsToPlace(
	player1,
	player2,
	boardOfShipsToPlace,
	numberOfShipsToPlace,
	boardSize,
	playerTurn,
	typeOfBoard,
	isHidden
) {
	// These variables will be defined by square's onColumnDragStart event callback
	let shipID;
	let squareDragged;
	let shipLength;

	const gameboardDiv = document.createElement("div");
	gameboardDiv.classList.add("gameboard");
	setTimeout(() => {
		gameboardDiv.classList.add("fadeIn");
	}, 0);
	if (typeOfBoard === "horizontalShipsToPlace") {
		gameboardDiv.style.flexDirection = "column";
	}
	gameboardDiv.classList.add(playerTurn);
	gameboardDiv.classList.add(typeOfBoard);

	let shipsNumbering = {};

	for (let i = 0; i < boardOfShipsToPlace.length; i++) {
		const columnDivContainer = document.createElement("div");
		const columnDiv = document.createElement("div");

		if (typeOfBoard === "verticalShipsToPlace") {
			columnDivContainer.classList.add("column");
		} else if (typeOfBoard === "horizontalShipsToPlace") {
			columnDivContainer.classList.add("row");
			columnDiv.classList.add("rowDraggable");
		}

		// Make draggable only even columns
		if (!((i + 2) % 2)) {
			columnDiv.draggable = true;
		} else {
			columnDivContainer.classList.add("empty");
			columnDiv.classList.add("empty");
		}
		columnDiv.addEventListener("dragstart", onColumnDragStart);
		for (let j = 0; j < boardOfShipsToPlace[i].length; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			if (typeOfBoard === "horizontalShipsToPlace") {
				// square.style.width = "100%";
			}
			square.dataset.player = playerTurn;
			square.dataset.x = i;
			square.dataset.y = j;
			if (boardOfShipsToPlace[i][j] === null) {
				square.style.opacity = "0";
				if (typeOfBoard === "verticalShipsToPlace") {
					square.style.display = "none";
				}
			} else {
				square.textContent = "B";
				square.classList.add("ship");
				square.dataset.shipId = boardOfShipsToPlace[i][j].shipID;
				square.dataset.shipLength = boardOfShipsToPlace[i][j].length;
				columnDiv.dataset.shipId = boardOfShipsToPlace[i][j].shipID;

				if (
					shipsNumbering[
						`shipID${boardOfShipsToPlace[i][j].shipID}`
					] === undefined
				) {
					shipsNumbering[
						`shipID${boardOfShipsToPlace[i][j].shipID}`
					] = 1;
				}
				square.dataset.shipSquareNumber =
					shipsNumbering[`shipID${boardOfShipsToPlace[i][j].shipID}`];
				shipsNumbering[`shipID${boardOfShipsToPlace[i][j].shipID}`]++;

				square.addEventListener("mousedown", function(event) {
					if (event.target.dataset.shipId !== undefined) {
						shipID = event.target.dataset.shipId;
						squareDragged = event.target.dataset.shipSquareNumber;
						shipLength = event.target.dataset.shipLength;
					}
				});
			}
			columnDiv.appendChild(square);
		}
		columnDivContainer.appendChild(columnDiv);
		gameboardDiv.appendChild(columnDivContainer);

		function onColumnDragStart(event) {
			if (shipID === undefined) {
				return;
			}
			event.dataTransfer.setData(
				"text/plain",
				`${shipID}${squareDragged}${shipLength}${typeOfBoard[0]}`
			);
			shipID = undefined;
		}
	}

	const placeShipsDiv = document.createElement("div");
	if (typeOfBoard === "verticalShipsToPlace") {
		placeShipsDiv.classList.add("verticalShipsContainer");
	} else if (typeOfBoard === "horizontalShipsToPlace") {
		placeShipsDiv.classList.add("horizontalShipsContainer");
	}
	if (isHidden) {
		placeShipsDiv.classList.add("hidden");
	}
	placeShipsDiv.appendChild(gameboardDiv);

	const rotateButton = document.createElement("button");
	rotateButton.textContent = "Rotar Barcos";
	rotateButton.addEventListener("click", rotateShips);
	placeShipsDiv.appendChild(rotateButton);

	const placeRandomly = document.createElement("button");
	placeRandomly.textContent = "Posicionar Barcos Aleatoriamente";
	placeRandomly.classList.add("placeRandomShips");
	placeRandomly.addEventListener("click", placeRandomShipsAndShowEm);
	placeShipsDiv.appendChild(placeRandomly);

	const boardsContainer = document.querySelector(
		`.${playerTurn} > .boardsContainer`
	);
	boardsContainer.appendChild(placeShipsDiv);

	function rotateShips() {
		let verticalShips = document.querySelector(".verticalShipsContainer");
		let horizontalShips = document.querySelector(
			".horizontalShipsContainer"
		);

		verticalShips.classList.toggle("hidden");
		horizontalShips.classList.toggle("hidden");
	}

	function placeRandomShipsAndShowEm() {
		const message = document.querySelector(".messages");
		if (playerTurn === "player1") {
			placeRandomShips(player1, boardSize);
			message.textContent = `Así queda pocisionada tu flota, ${player1.name}:`;
		} else if (playerTurn === "player2") {
			placeRandomShips(player2, boardSize);
			message.textContent = `Así queda pocisionada tu flota, ${player2.name}:`;
		}
		const gameboards = document.querySelectorAll(".gameboardContainer");
		gameboards.forEach(gameboard => {
			gameboard.remove();
		});

		showBoard(
			player1,
			player2,
			playerTurn,
			"ownBoard",
			false,
			boardSize,
			true
		);

		afterPlacingShipsButton(
			player1,
			player2,
			playerTurn,
			numberOfShipsToPlace,
			boardSize
		);
	}
}

function removePlaceShipsElements() {
	const messages = document.querySelectorAll(".messages");

	const verticalShipsToPlace = document.querySelector(
		".verticalShipsContainer"
	);
	const horizontalShipsToPlace = document.querySelector(
		".horizontalShipsContainer"
	);
	const gameboard = document.querySelector(".gameboardContainer");

	if (messages !== null) {
		messages.forEach(message => {
			message.remove();
		});
	}
	if (verticalShipsToPlace !== null) {
		verticalShipsToPlace.remove();
	}
	if (horizontalShipsToPlace !== null) {
		horizontalShipsToPlace.remove();
	}
	if (gameboard !== null) {
		gameboard.remove();
	}
}

function afterPlacingShipsButton(
	player1,
	player2,
	playerTurn,
	numberOfShipsToPlace,
	boardSize
) {
	let button;
	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add("buttonContainer");

	if (playerTurn === "player1" && player2.name !== "Computadora") {
		// player2 placesShips
		button = document.createElement("button");
		button.classList.add("toggleBoards");
		setTimeout(() => {
			button.classList.add("fadeIn");
		}, 0);
		button.textContent = `Presioná para esconder tu tablero y dejar que ${player2.name} posicione sus barcos`;
		button.addEventListener("click", () => {
			buttonContainer.remove();
			document.querySelectorAll(".messages").forEach(message => {
				message.remove();
			});
			document.querySelector(".gameboardContainer").remove();

			placeShips(
				player1,
				player2,
				"player2",
				numberOfShipsToPlace,
				Gameboard(boardSize),
				boardSize
			);
		});
	} else if (playerTurn === "player1" && player2.name === "Computadora") {
		button = document.createElement("button");
		button.classList.add("battleBegins");
		setTimeout(() => {
			button.classList.add("fadeIn");
		}, 0);
		button.textContent = `¡Empieza el juego!`;
		button.addEventListener("click", () => {
			buttonContainer.remove();
			placeRandomShips(player2, boardSize);
			battleBegins(player1, player2, boardSize);
		});
	} else if (playerTurn === "player2") {
		button = document.createElement("button");
		button.classList.add("battleBegins");
		setTimeout(() => {
			button.classList.add("fadeIn");
		}, 0);
		button.textContent = `¡Ocultá tu tablero y dejá que ${player1.name} empiece el juego!`;
		button.addEventListener("click", () => {
			buttonContainer.remove();
			battleBegins(player1, player2, boardSize);
		});
	}

	buttonContainer.appendChild(button);

	const verticalShips = document.querySelector(".verticalShipsContainer");
	verticalShips.remove();
	const horizontalShips = document.querySelector(".horizontalShipsContainer");
	horizontalShips.remove();

	const boardsContainer = document.querySelector(
		`.playerDiv.${playerTurn} > .boardsContainer`
	);
	boardsContainer.appendChild(buttonContainer);
}

function createToggleButton(
	player,
	player1name,
	player2name,
	textContent,
	selectorToAppendIt,
	hide
) {
	const button = document.createElement("button");
	button.classList.add("toggleBoards");
	setTimeout(() => {
		button.classList.add("fadeIn");
	});
	if (hide) {
		button.classList.add("hidden");
	}
	button.dataset.player = player;
	button.textContent = textContent;
	button.addEventListener("click", toggleBoards);
	// document.querySelector(`.playerDiv.${player}`).appendChild(button);
	document.querySelector(selectorToAppendIt).appendChild(button);

	function toggleBoards() {
		const player = this.dataset.player;

		let otherPlayer;
		let playerName;
		let otherPlayerName;

		if (player === "player1") {
			otherPlayer = "player2";
			playerName = player1name;
			otherPlayerName = player2name;
		} else {
			otherPlayer = "player1";
			playerName = player2name;
			otherPlayerName = player1name;
		}

		if (player === whoPlays) {
			showMakeYourMove(whoPlays);
			return;
		}

		// Hide:
		button.classList.add("hidden");

		const playerDiv = document.querySelector(`.playerDiv.${player}`);
		playerDiv.classList.add("hidden");

		const lastAttacked = document.querySelector(
			`[data-player="${player}"].lastAttacked`
		);
		if (lastAttacked) {
			lastAttacked.classList.remove("lastAttacked");
		}

		// Show Button:
		const buttonContainer = document.createElement("div");
		buttonContainer.classList.add("buttonContainer");
		const showButton = document.createElement("button");
		showButton.classList.add("showHiddenBoards");
		setTimeout(() => {
			button.classList.add("fadeIn");
		}, 0);
		showButton.textContent = `Mostrar tableros de ${otherPlayerName}`;
		showButton.addEventListener("click", showHiddenBoards);
		buttonContainer.appendChild(showButton);
		document.querySelector("main").appendChild(buttonContainer);

		function showMakeYourMove() {
			alert(`¡Todavía no hiciste tu jugada, ${playerName}!`);
		}

		function showHiddenBoards() {
			const otherPlayerDiv = document.querySelector(
				`.playerDiv.${otherPlayer}`
			);
			otherPlayerDiv.classList.remove("hidden");
			buttonContainer.remove();
		}
	}
}

function showOtherPlayersBoardsButton(player1, callBack) {
	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add("buttonContainer");
	const button = document.createElement("button");
	button.classList.add("toggleBoards");
	setTimeout(() => {
		button.classList.add("fadeIn");
	}, 0);
	button.textContent = `Mostrar tableros de ${player1.name}`;
	button.addEventListener("click", callBack);
	buttonContainer.appendChild(button);
	document.querySelector("main").appendChild(buttonContainer);
}

function showBoard(
	player1,
	player2,
	playerTurn,
	typeOfBoard,
	isHidden,
	boardSize,
	isForPlacingShips,
	numberOfShipsToPlace,
	shipsToPlace
) {
	let board;
	let playerName;
	let otherPlayer;
	if (playerTurn === "player1") {
		playerName = player1.name;
		otherPlayer = "player2";
		if (typeOfBoard === "ownBoard") {
			board = player1.gameboard.board;
		} else if (typeOfBoard === "enemyBoard") {
			board = player1.gameboard.receivedHits;
		}
	} else if (playerTurn === "player2") {
		playerName = player2.name;
		otherPlayer = "player1";
		if (typeOfBoard === "ownBoard") {
			board = player2.gameboard.board;
		} else if (typeOfBoard === "enemyBoard") {
			board = player2.gameboard.receivedHits;
		}
	}

	const gameboardContainer = document.createElement("div");
	gameboardContainer.classList.add("gameboardContainer");
	gameboardContainer.classList.add(playerTurn);
	if (isHidden) {
		gameboardContainer.classList.add("hidden");
	}

	if (!isForPlacingShips) {
		const boardTitle = document.createElement("div");
		boardTitle.classList.add(`${typeOfBoard}Title`);
		boardTitle.textContent = `Aguas y Flota de ${playerName}`;
		gameboardContainer.appendChild(boardTitle);
	}

	const gameboardDiv = document.createElement("div");
	gameboardDiv.classList.add("gameboard");
	gameboardDiv.classList.add(playerTurn);
	gameboardDiv.classList.add(typeOfBoard);

	let shipsNumbering = {};

	for (let i = 0; i < board.length; i++) {
		const columnDiv = document.createElement("div");
		columnDiv.classList.add("column");
		for (let j = 0; j < board[i].length; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			square.dataset.player = playerTurn;
			square.dataset.x = i;
			square.dataset.y = j;
			if (board[i][j] === null) {
				square.textContent = "A";
				square.classList.add("water");
				square.classList.add("waterAnimation");

				if (isForPlacingShips) {
					square.addEventListener("dragenter", function(event) {
						event.preventDefault();
					});
					square.addEventListener("dragover", function(event) {
						event.preventDefault();
					});
					square.addEventListener("drop", onDrop);
				}
			} else if (board[i][j] === false) {
				square.textContent = "?";
				square.classList.add("notAttacked");
				square.addEventListener("click", callAttack);
			} else {
				square.textContent = "B";
				square.classList.add("ship");
				square.dataset.shipId = board[i][j].shipID;

				if (
					shipsNumbering[`shipID${board[i][j].shipID}`] === undefined
				) {
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

	let whichPlayersDiv;
	if (typeOfBoard === "ownBoard") {
		whichPlayersDiv = playerTurn;
	} else if (typeOfBoard === "enemyBoard") {
		whichPlayersDiv = otherPlayer;
	}

	gameboardContainer.appendChild(gameboardDiv);
	const boardsContainer = document.querySelector(
		`.playerDiv.${whichPlayersDiv} > .boardsContainer`
	);
	boardsContainer.appendChild(gameboardContainer);

	function callAttack() {
		attack.call(this, player1, player2, boardSize);
	}

	let numberOfPlacedShips = 0;

	function onDrop(event) {
		const data = event.dataTransfer.getData("text/plain");
		if (data === "") {
			return;
		}
		const shipID = parseInt(data[0], 10);
		const squareDropped = parseInt(data[1], 10);
		const shipLength = parseInt(data[2], 10);
		const x = parseInt(event.target.dataset.x, 10);
		const y = parseInt(event.target.dataset.y, 10);

		let isVertical;
		let x0 = null;
		let y0 = null;

		if (data[3] === "v") {
			isVertical = true;
			x0 = parseInt(x, 10);
			y0 = y - squareDropped + 1;
		} else if (data[3] === "h") {
			isVertical = false;
			x0 = x - squareDropped + 1;
			y0 = parseInt(y, 10);
		}

		// placeShip & remove it from shipsToPlace
		let fullShipCoordinates;
		if (playerTurn === "player1") {
			fullShipCoordinates = player1.gameboard.placeShip(
				shipID,
				shipLength,
				isVertical,
				x0,
				y0
			);
		} else if (playerTurn === "player2") {
			fullShipCoordinates = player2.gameboard.placeShip(
				shipID,
				shipLength,
				isVertical,
				x0,
				y0
			);
		}

		// This condition is met when the ship could not be placed
		if (typeof fullShipCoordinates === "string") {
			return;
		} else {
			const placeRandomlyButton = document.querySelectorAll(
				".placeRandomShips"
			);
			if (placeRandomlyButton) {
				placeRandomlyButton.forEach(button => {
					button.remove();
				});
			}
		}
		shipsToPlace.removeShip(shipID);

		// Show placed ship on ownBoard
		const gameboard = document.querySelector(
			`.gameboard.${this.dataset.player}.ownBoard`
		);
		for (let i = 0; i < fullShipCoordinates.length; i++) {
			const coord = fullShipCoordinates[i];
			const shipSquare = gameboard.querySelector(
				`[data-x="${coord[0]}"][data-y="${coord[1]}"]`
			);
			shipSquare.classList.remove("water");
			shipSquare.classList.remove("waterAnimation");
			shipSquare.textContent = "B";
			shipSquare.classList.add("ship");
		}

		// Hide placed ship on shipsToPlace and make it not draggable
		const verticalShips = document.querySelector(".verticalShipsContainer");
		const placedShipVertical = verticalShips.querySelectorAll(
			`[data-ship-id="${shipID}"]`
		);
		for (let i = 0; i < placedShipVertical.length; i++) {
			const square = placedShipVertical[i];
			square.style.opacity = "0";
			square.setAttribute.draggable = false;
		}

		const horizontalShips = document.querySelector(
			".horizontalShipsContainer"
		);
		const placedShipHorizontal = horizontalShips.querySelectorAll(
			`[data-ship-id="${shipID}"]`
		);

		for (let i = 0; i < placedShipHorizontal.length; i++) {
			const square = placedShipHorizontal[i];
			square.style.opacity = "0";
		}

		const draggableDiv = document.querySelector(
			`[data-ship-id="${shipID}"][draggable="true"]`
		);
		draggableDiv.setAttribute("draggable", "false");

		// Check if all ships have been placed
		numberOfPlacedShips++;
		if (numberOfPlacedShips === numberOfShipsToPlace) {
			numberOfPlacedShips = 0;
			afterPlacingShipsButton(
				player1,
				player2,
				this.dataset.player,
				numberOfShipsToPlace,
				boardSize
			);
		}
	}
}

function showAttackEnemyBoard(player1, result, player2name, boardSize) {
	if (result === "¡Agua!") {
		this.addEventListener("transitionend", () => {
			this.textContent = "A";
			this.classList.remove("questionTrans");
			this.classList.add("water");
			this.classList.add("waterAnimation");
			isComputerMove();
		});
		this.classList.add("questionTrans");
	} else if (result === "¡Barco tocado!") {
		this.addEventListener("transitionend", () => {
			this.textContent = "B";
			this.classList.remove("questionTrans");
			this.classList.add("ship");
			isComputerMove();
		});
		this.classList.add("questionTrans");
	} else if (result === "¡Barco hundido!") {
		function onTransitionEnd() {
			this.textContent = "X";
			this.classList.remove("questionTrans");
			this.removeEventListener("transitionend", onTransitionEnd);
			this.classList.add("sunkenShip");
			isComputerMove();
		}
		this.addEventListener("transitionend", onTransitionEnd);
		this.classList.add("questionTrans");
	} else if (result === "¡Todos los barcos han sido hundidos!") {
		function onTransitionEnd() {
			this.textContent = "X";
			this.classList.remove("questionTrans");
			this.removeEventListener("transitionend", onTransitionEnd);
			this.addEventListener("transitionend", () => {
				let whoWins;
				if (this.dataset.player === "player1") {
					whoWins = "player2";
				} else if (this.dataset.player === "player2") {
					whoWins = "player1";
				}
				winner(player1.name, player2name, whoWins);
			});
			this.classList.add("lastSunkenShip");
		}
		this.addEventListener("transitionend", onTransitionEnd);
		this.classList.add("questionTrans");
	}

	function isComputerMove() {
		if (player2name === "Computadora") {
			const compMoveObject = computerAttack(boardSize, player1);

			// Show Computer Move:
			const attackedSquare = document.querySelector(
				`:not(.notAttacked)[data-player="player1"][data-x="${compMoveObject.x}"][data-y="${compMoveObject.y}"]`
			);
			if (compMoveObject.result === "¡Agua!") {
				// Remove waterAnimation while attackedTrans is happening.
				attackedSquare.classList.remove("waterAnimation");
				console.log(attackedSquare);
			}
			attackedSquare.textContent = "\u{1F7CF}";
			setTimeout(() => {
				// attackedSquare.style.zIndex = "3";
				attackedSquare.classList.add("attacked");
				attackedSquare.classList.add("attackedTrans");
				attackedSquare.addEventListener(
					"transitionend",
					transitionEndCallback
				);
			}, 0);

			function transitionEndCallback() {
				// This zIndex is to lower already attacked squares so that newly attacked
				// squares remain in a higher zIndex
				attackedSquare.addEventListener("transitionend", () => {
					attackedSquare.style.zIndex = "1";
				});
				attackedSquare.classList.remove("attackedTrans");
				if (
					compMoveObject.result ===
					"¡Todos los barcos han sido hundidos!"
				) {
					setTimeout(() => {
						winner(player1.name, player2name, "player2");
					}, 0);
				}
				attackedSquare.removeEventListener(
					"transitionend",
					transitionEndCallback
				);
				if (compMoveObject.result === "¡Agua!") {
					attackedSquare.addEventListener("transitionend", () => {
						attackedSquare.classList.add("waterAnimation");
					});
				}
			}
		} else {
			// Show toggle button after the attack
			let whoseButton;
			if (whoPlays === "player1") {
				whoseButton = "player2";
			} else if (whoPlays === "player2") {
				whoseButton = "player1";
			}

			const toggleButton = document.querySelector(
				`button[data-player="${whoseButton}"]`
			);
			setTimeout(() => {
				toggleButton.classList.remove("hidden");
			}, 0);
		}
	}
}

function showAttackOwnBoard() {
	const attackedSquare = document.querySelector(
		`:not(.notAttacked)[data-player="${this.dataset.player}"][data-x="${this.dataset.x}"][data-y="${this.dataset.y}"]`
	);
	if (attackedSquare !== null) {
		attackedSquare.textContent = "\u{1F7CF}";
		attackedSquare.classList.add("attacked");
		attackedSquare.classList.add("lastAttacked");
	}
}

function winner(player1name, player2name, playerTurn) {
	let whoWins;
	if (playerTurn === "player1") {
		whoWins = player1name;
	} else if (playerTurn === "player2") {
		whoWins = player2name;
	}

	const main = document.querySelector("main");
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}

	main.style.justifyContent = "space-around"

	const won = document.createElement("div");
	won.textContent = "GANÓ";
	won.classList.add("won");
	won.classList.add("wonAnim");

	let count = 0;
	won.addEventListener("animationiteration", () => {
		count += 1;
		if (count === 3) {
			won.textContent += ".";
			won.classList.remove("wonAnim");
			winPlayer.classList.add("winPlayerAnim");
			return;
		}
		won.textContent += ".";
	});

	const winPlayer = document.createElement("div");
	winPlayer.textContent = `${whoWins}`;
	winPlayer.classList.add("winPlayer");
	winPlayer.style.opacity = "0";
	winPlayer.addEventListener("animationend", () => {
		winPlayer.style.opacity = "1";
		sunkAll.classList.add("sunkAllAnim");
	});

	const sunkAll = document.createElement("div");
	sunkAll.textContent = "¡Hundió todos los barcos!";
	sunkAll.classList.add("sunkAll");
	sunkAll.style.opacity = "0";
	sunkAll.addEventListener("animationend", () => {
		sunkAll.style.opacity = "1";
	});

	main.appendChild(won);
	main.appendChild(winPlayer);
	main.appendChild(sunkAll);

	// alert(`Ganó ${whoWins}.  ¡Hundió todos los barcos!`);
}

export {
	mainTitleAndGetNames,
	chainFadeInS,
	createPlayersDivs,
	placeShipsMessage,
	removePlaceShipsElements,
	createToggleButton,
	showOtherPlayersBoardsButton,
	showShipsToPlace,
	showBoard,
	showAttackEnemyBoard,
	showAttackOwnBoard,
	winner
};
