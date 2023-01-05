import { whoPlays, placeShips, battleBegins, attack } from "./index.js";
import { Gameboard, placeRandomShips, computerAttack } from "./gameLogic.js";

function createToggleButton(player, player1name, player2name, hide) {
  const button = document.createElement("button");
  button.classList.add("toggleBoards");
  if (hide) {
    button.classList.add("hidden");
  }
  button.dataset.player = player;
  button.textContent = "Esconder tableros y cambiar turno";
  button.addEventListener("click", toggleBoards);
  document.querySelector("main").appendChild(button);

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

    const lastAttacked = document.querySelector(
      `[data-player="${player}"].lastAttacked`
    );
    if (lastAttacked) {
      lastAttacked.classList.remove("lastAttacked");
    }

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
}

function placeShipsMessage(playerName, numberOfShipsToPlace) {
  removePlaceShipsElements();

  const messagesDiv = document.createElement("div");
  messagesDiv.classList.add("messages");
  messagesDiv.textContent = `${playerName}, posiciona tus ${numberOfShipsToPlace} barcos sobre las aguas...`;

  const main = document.querySelector("main");
  main.appendChild(messagesDiv);
}

function removePlaceShipsElements() {
  const messages = document.querySelector(".messages");

  const verticalShipsToPlace = document.querySelector(
    ".verticalShipsContainer"
  );
  const horizontalShipsToPlace = document.querySelector(
    ".horizontalShipsContainer"
  );
  const gameboard = document.querySelector(".gameboard.ownBoard");

  if (messages !== null) {
    messages.remove();
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

function showShipsToPlace(board, playerTurn, typeOfBoard, isHidden) {
  // These variables will be defined by square's onColumnDragStart event callback
  let shipID;
  let squareDragged;
  let shipLength;

  const gameboardDiv = document.createElement("div");
  gameboardDiv.classList.add("gameboard");
  if (typeOfBoard === "horizontalShipsToPlace") {
    gameboardDiv.style.flexDirection = "column";
  }
  gameboardDiv.classList.add(playerTurn);
  gameboardDiv.classList.add(typeOfBoard);

  let shipsNumbering = {};

  for (let i = 0; i < board.length; i++) {
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
    }
    columnDiv.addEventListener("dragstart", onColumnDragStart);
    for (let j = 0; j < board[i].length; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      if (typeOfBoard === "horizontalShipsToPlace") {
        square.style.width = "100%";
      }
      square.dataset.player = playerTurn;
      square.dataset.x = i;
      square.dataset.y = j;
      if (board[i][j] === null) {
        square.style.opacity = "0";
        if (typeOfBoard === "verticalShipsToPlace") {
          square.style.display = "none";
        }
      } else {
        square.textContent = "B";
        square.classList.add("ship");
        square.dataset.shipId = board[i][j].shipID;
        square.dataset.shipLength = board[i][j].length;
        columnDiv.dataset.shipId = board[i][j].shipID;

        if (shipsNumbering[`shipID${board[i][j].shipID}`] === undefined) {
          shipsNumbering[`shipID${board[i][j].shipID}`] = 1;
        }
        square.dataset.shipSquareNumber =
          shipsNumbering[`shipID${board[i][j].shipID}`];
        shipsNumbering[`shipID${board[i][j].shipID}`]++;

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
  rotateButton.textContent = "Rotar barcos";
  rotateButton.addEventListener("click", rotateShips);
  placeShipsDiv.appendChild(rotateButton);

  const main = document.querySelector("main");
  main.appendChild(placeShipsDiv);

  function rotateShips() {
    let verticalShips = document.querySelector(".verticalShipsContainer");
    let horizontalShips = document.querySelector(".horizontalShipsContainer");

    verticalShips.classList.toggle("hidden");
    horizontalShips.classList.toggle("hidden");
  }
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
  shipsToPlace,
  player2name
) {
  const gameboardDiv = document.createElement("div");
  gameboardDiv.classList.add("gameboard");
  gameboardDiv.classList.add(playerTurn);
  gameboardDiv.classList.add(typeOfBoard);
  if (isHidden) {
    gameboardDiv.classList.add("hidden");
  }
  let shipsNumbering = {};

  let board;
  if (playerTurn === "player1") {
    if (typeOfBoard === "ownBoard") {
      board = player1.gameboard.board;
    } else if (typeOfBoard === "enemyBoard") {
      board = player1.gameboard.receivedHits;
    }
  } else if (playerTurn === "player2") {
    if (typeOfBoard === "ownBoard") {
      board = player2.gameboard.board;
    } else if (typeOfBoard === "enemyBoard") {
      board = player2.gameboard.receivedHits;
    }
  }

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

        if (shipsNumbering[`shipID${board[i][j].shipID}`] === undefined) {
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
  document.querySelector("main").appendChild(gameboardDiv);

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

    const horizontalShips = document.querySelector(".horizontalShipsContainer");
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
    console.log(draggableDiv);
    draggableDiv.setAttribute("draggable", "false");

    // Check if all ships have been placed
    numberOfPlacedShips++;
    if (numberOfPlacedShips === numberOfShipsToPlace) {
      if (this.dataset.player === "player2") {
        setTimeout(() => {
          battleBegins(player1, player2, boardSize);
        }, 0);
        return;
      }
      if (player2name === "Computadora") {
        placeRandomShips(player2, boardSize);
        setTimeout(() => {
          battleBegins(player1, player2, boardSize);
        }, 0);
        return;
      } else if (this.dataset.player === "player1") {
        setTimeout(() => {
          placeShips(
            player1,
            player2,
            "player2",
            numberOfShipsToPlace,
            Gameboard(boardSize),
            boardSize
          );
        }, 0);
        numberOfPlacedShips = 0;
        return;
      }
    }
  }
}

function showAttackEnemyBoard(player1, result, player2name, boardSize) {
  if (result === "¡Agua!") {
    this.addEventListener("transitionend", isComputerMove);
    this.classList.add("water");
    this.classList.add("waterTrans");
    this.textContent = "A";
  } else if (result === "¡Barco tocado!") {
    this.addEventListener("transitionend", isComputerMove);
    this.classList.add("ship");
    this.classList.add("shipTrans");
    this.textContent = "B";
  } else if (result === "¡Barco hundido!") {
    this.addEventListener("transitionend", isComputerMove);
    this.classList.add("sunkenShip");
    this.classList.add("sunkenShipTrans");
    this.textContent = "X";
  } else if (result === "¡Todos los barcos han sido hundidos!") {
    this.classList.add("sunkenShip");
    this.classList.add("sunkenShipTrans");
    this.textContent = "X";
  }

  function isComputerMove() {
    if (player2name === "Computadora") {
      const compMoveObject = computerAttack(boardSize, player1);

      // Show Computer Move:
      const attackedSquare = document.querySelector(
        `:not(.notAttacked)[data-player="player1"][data-x="${compMoveObject.x}"][data-y="${compMoveObject.y}"]`
      );
      attackedSquare.textContent = "\u{1F7CF}";
      attackedSquare.classList.add("attacked");
      attackedSquare.classList.add("attackedTrans");
      attackedSquare.addEventListener("transitionend", transitionEndCallback);

      function transitionEndCallback() {
        attackedSquare.classList.remove("attackedTrans");

        if (compMoveObject.result === "¡Todos los barcos han sido hundidos!") {
          whoPlays = "player2";
          setTimeout(() => {
            winner(player1.name, player2name);
          }, 0);
        }
        attackedSquare.removeEventListener(
          "transitionend",
          transitionEndCallback
        );
      }
    }
  }
}

function showAttackOwnBoard() {
  const attackedSquare = document.querySelector(
    `:not(.notAttacked)[data-player="${this.dataset.player}"][data-x="${this.dataset.x}"][data-y="${this.dataset.y}"]`
  );
  attackedSquare.textContent = "\u{1F7CF}";
  attackedSquare.classList.add("attacked");
  attackedSquare.classList.add("lastAttacked");
}

function winner(player1name, player2name) {
  let whoWins;
  if (whoPlays === "player1") {
    whoWins = player1name;
  } else if (whoPlays === "player2") {
    whoWins = player2name;
  }
  alert(`Ganó ${whoWins}.  ¡Hundió todos los barcos!`);
}

export {
  placeShipsMessage,
  removePlaceShipsElements,
  createToggleButton,
  showShipsToPlace,
  showBoard,
  showAttackEnemyBoard,
  showAttackOwnBoard,
  winner
};
