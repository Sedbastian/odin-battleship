import { attack } from "./index.js";

function showBoard(board, receivedHitsPlayer) {
  const gameboardDiv = document.createElement("div");
  gameboardDiv.classList.add("gameboard");
  console.log(board);
  for (let i = 0; i < board.length; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");
    for (let j = 0; j < board[i].length; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      if (board[i][j] === null) {
        square.textContent = "A";
        square.classList.add("water");
      } else if (board[i][j] === false) {
        square.textContent = "?";
        square.classList.add("notAttacked");
        square.dataset.x = i;
        square.dataset.y = j;
        square.dataset.player = receivedHitsPlayer;
        square.addEventListener("click", attack);
      } else {
        square.textContent = "B";
        square.classList.add("ship");
      }
      columnDiv.appendChild(square);
    }
    gameboardDiv.appendChild(columnDiv);
  }
  document.querySelector("body").appendChild(gameboardDiv);
}

function showAttack(result) {
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

export { showBoard, showAttack };
