import { attack } from "./index.js";

function showBoard(board, playerBoard, kindOfBoard, isHidden) {
  const gameboardDiv = document.createElement("div");
  gameboardDiv.classList.add("gameboard");
  gameboardDiv.classList.add(playerBoard);
	gameboardDiv.classList.add(kindOfBoard);
	if (isHidden) {
		gameboardDiv.classList.add("hidden");
	}
  for (let i = 0; i < board.length; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");
    for (let j = 0; j < board[i].length; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.player = playerBoard;
      square.dataset.x = i;
      square.dataset.y = j;
      if (board[i][j] === null) {
        square.textContent = "A";
        square.classList.add("water");
      } else if (board[i][j] === false) {
        square.textContent = "?";
        square.classList.add("notAttacked");
        square.addEventListener("click", attack);
      } else if (typeof board[i][j] === "object") {
        square.textContent = "B";
        square.classList.add("ship");
      }
      columnDiv.appendChild(square);
    }
    gameboardDiv.appendChild(columnDiv);
  }
  document.querySelector("body").appendChild(gameboardDiv);
}

function showAttackEnemyBoard(result) {
  if (result === "¡Agua!") {
    this.classList.add("water");
    this.textContent = "A";
  } else if (result === "¡Barco tocado!") {
    this.classList.add("ship");
    this.textContent = "B";
  } else if (result === "¡Barco hundido!") {
    this.classList.add("sunkenShip");
    this.textContent = "X";
  } else if (result === "¡Todos los barcos han sido hundidos!") {
    this.classList.add("sunkenShip");
    this.textContent = "X";
    alert(result);
  }
}

function showAttackOwnBoard(result) {
  const attackedSquare = document.querySelector(
    `:not(.notAttacked)[data-player="${this.dataset.player}"][data-x="${this.dataset.x}"][data-y="${this.dataset.y}"]`
  );
  attackedSquare.textContent = "\u{1F7CF}";
  attackedSquare.classList.add("attacked");
}

function toggleBoards(player) {
  let otherPlayer;
  if (player === "player1") {
    otherPlayer = "player2";
  } else {
    otherPlayer = "player1";
	}
	
	const ownBoardToHide = document.querySelector(
    `.gameboard.${player}.ownBoard`
  );
	ownBoardToHide.classList.toggle("hidden");
	
  const enemyBoardToHide = document.querySelector(
    `.gameboard.${otherPlayer}.enemyBoard`
  );
	enemyBoardToHide.classList.toggle("hidden");

	const ownBoardToShow = document.querySelector(
    `.gameboard.${otherPlayer}.ownBoard`
  );
	ownBoardToShow.classList.toggle("hidden");

		const enemyBoardToShow = document.querySelector(
			`.gameboard.${player}.enemyBoard`
		);
		enemyBoardToShow.classList.toggle("hidden");
	
}

export { showBoard, showAttackEnemyBoard, showAttackOwnBoard, toggleBoards };
