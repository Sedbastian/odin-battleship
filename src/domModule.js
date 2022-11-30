import { attack, player1, player2, whoPlays } from "./index.js";

function createToggleButton(player, hide) {
  const button = document.createElement("button");
  button.classList.add("toggleBoards");
  if (hide) {
    button.classList.add("hidden");
  }
  button.dataset.player = player;
  button.textContent = "Esconder tableros y cambiar turno";
  button.addEventListener("click", toggleBoards);
  document.querySelector("main").appendChild(button);
}

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
  document.querySelector("main").appendChild(gameboardDiv);
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

function toggleBoards() {
	const player = this.dataset.player;
	
  let otherPlayer;
	let playerName;
	let otherPlayerName;

  if (player === "player1") {
    otherPlayer = "player2";
		playerName = player1.name;
		otherPlayerName = player2.name;
  } else {
    otherPlayer = "player1";
		playerName = player2.name;
		otherPlayerName = player1.name;
	}
	
	if (player === whoPlays) {
		showMakeYourMove(whoPlays);
		return;
	}

  // Hide:
  const ownBoardToHide = document.querySelector(
    `.gameboard.${player}.ownBoard`
  );
  ownBoardToHide.classList.toggle("hidden");

  const enemyBoardToHide = document.querySelector(
    `.gameboard.${otherPlayer}.enemyBoard`
  );
  enemyBoardToHide.classList.toggle("hidden");

  const toggleButtonToHide = document.querySelector(
    `button[data-player="${player}"]`
  );
  toggleButtonToHide.classList.toggle("hidden");

  // Show:
  const showButton = document.createElement("button");
  showButton.classList.add("showHiddenBoards");
  showButton.textContent = `Mostrar tableros de ${otherPlayerName}`;
  showButton.addEventListener("click", showHiddenBoards);
  document.querySelector("main").appendChild(showButton);

	function showMakeYourMove() {
		alert(`¡Todavía no hiciste tu jugada, ${playerName}!`);
	}

  function showHiddenBoards() {
		
    const ownBoardToShow = document.querySelector(
      `.gameboard.${otherPlayer}.ownBoard`
    );
    ownBoardToShow.classList.toggle("hidden");

    const enemyBoardToShow = document.querySelector(
      `.gameboard.${player}.enemyBoard`
    );
    enemyBoardToShow.classList.toggle("hidden");

    const toggleButtonToShow = document.querySelector(
      `button[data-player="${otherPlayer}"]`
    );
    toggleButtonToShow.classList.toggle("hidden");

    showButton.classList.toggle("hidden");
  }
}

export {
  createToggleButton,
  showBoard,
  showAttackEnemyBoard,
  showAttackOwnBoard
};
