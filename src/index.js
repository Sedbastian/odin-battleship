import "./style.css";
import { Player, Gameboard } from "./gameLogic.js";
import {
	mainTitleAndGetNames,
	chainFadeInS,
	createPlayersDivs,
	placeShipsMessage,
	removePlaceShipsElements,
	showShipsToPlace,
	showBoard,
	showAttackEnemyBoard,
	showAttackOwnBoard,
	createToggleButton,
	showOtherPlayersBoardsButton,
	winner
} from "./domModule.js";

let whoPlays = "player1";

mainTitleAndGetNames();

function initializeGame(player1name, player2name, boardSize = 10) {
	const player1 = Player(player1name, Gameboard(boardSize));
	const player2 = Player(player2name, Gameboard(boardSize));

	createPlayersDivs(player2name);

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
	placeShipsMessage(
		player1.name,
		player2.name,
		playerTurn,
		numberOfShipsToPlace
	);

	shipsToPlace.placeShip(1, 5, true, 0, 0);
	shipsToPlace.placeShip(2, 4, true, 2, 0);
	shipsToPlace.placeShip(3, 3, true, 4, 0);
	shipsToPlace.placeShip(4, 2, true, 6, 0);
	shipsToPlace.placeShip(5, 1, true, 8, 0);

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

	showShipsToPlace(
		player1,
		player2,
		shipsToPlace.board,
		numberOfShipsToPlace,
		boardSize,
		playerTurn,
		"verticalShipsToPlace",
		false
	);

	showShipsToPlace(
		player1,
		player2,
		shipsToPlace.board,
		numberOfShipsToPlace,
		boardSize,
		playerTurn,
		"horizontalShipsToPlace",
		true
	);

	const messages = document.querySelector(".messages");
	const shipsContainer = document.querySelector(".verticalShipsToPlace");

	chainFadeInS(null, [messages, shipsContainer], "2s");

	const messages2 = document.querySelector(".messages2");
	const gameboardContainer = document.querySelector(".gameboardContainer");
	chainFadeInS(messages, [messages2, gameboardContainer], "2s");

	const buttons = document.querySelectorAll(".verticalShipsContainer button");
	chainFadeInS(gameboardContainer, buttons, "2s");
}

function battleBegins(player1, player2, boardSize) {
	removePlaceShipsElements();
	if (player2.name !== "Computadora") {
		const player2Div = document.querySelector(".playerDiv.player2");
		player2Div.classList.add("hidden");

		showOtherPlayersBoardsButton(player1, showPlayersBoards);

		function showPlayersBoards() {
			document.querySelector("button.toggleBoards.fadeIn").remove();
			showBoard(
				player1,
				player2,
				"player1",
				"ownBoard",
				false,
				boardSize
			);
			showBoard(
				player1,
				player2,
				"player2",
				"enemyBoard",
				false,
				boardSize
			);
			createToggleButton("player1", player1.name, player2.name, "hide");
			showBoard(
				player1,
				player2,
				"player2",
				"ownBoard",
				false,
				boardSize
			);
			showBoard(
				player1,
				player2,
				"player1",
				"enemyBoard",
				false,
				boardSize
			);
			createToggleButton("player2", player1.name, player2.name, "hide");
		}
	} else {
		showBoard(player1, player2, "player1", "ownBoard", false, boardSize);
		showBoard(player1, player2, "player2", "enemyBoard", false, boardSize);
	}
}

function attack(player1, player2, boardSize) {
	if (this.dataset.player === whoPlays) {
		return;
	}

	let result;
	if (this.dataset.player === "player2") {
		result = player2.gameboard.receiveAttack(
			this.dataset.x,
			this.dataset.y
		);
		console.log(result);
	} else if (this.dataset.player === "player1") {
		result = player1.gameboard.receiveAttack(
			this.dataset.x,
			this.dataset.y
		);
		console.log(result);
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

export { whoPlays, initializeGame, placeShips, battleBegins, attack };
