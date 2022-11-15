function showBoard(player) {
	const gameboardDiv = document.createElement("div");
	gameboardDiv.classList.add("gameboard");

  for (let i = 0; i < player.gameboard.board.length; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");
    for (let j = 0; j < player.gameboard.board[i].length; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      if (player.gameboard.board[i][j] === null) {
				square.textContent = "W";
				square.classList.add("water");
      } else {
				square.textContent = "S";
				square.classList.add("ship");
      }
      columnDiv.appendChild(square);
    }
    gameboardDiv.appendChild(columnDiv);
  }
  document.querySelector("body").appendChild(gameboardDiv);
}

export { showBoard };
