import "./style.css";
import { Player, Gameboard } from "./gameLogic.js";
import { showBoard } from "./domModule.js";

let boardSize = 10;
const player1 = Player(true, "Rinzai", Gameboard(boardSize));
const player2 = Player(false, "Computer", Gameboard(boardSize));

player1.gameboard.placeShip(5, true, 0, 0);
player1.gameboard.placeShip(4, true, 2, 0);
player1.gameboard.placeShip(3, true, 4, 0);
player1.gameboard.placeShip(2, true, 6, 0);
player1.gameboard.placeShip(1, true, 8, 0);

player2.gameboard.placeShip(5, false, 0, 0);
player2.gameboard.placeShip(4, false, 0, 2);
player2.gameboard.placeShip(3, false, 0, 4);
player2.gameboard.placeShip(2, false, 0, 6);
player2.gameboard.placeShip(1, false, 0, 8);

showBoard(player1);
showBoard(player2);
