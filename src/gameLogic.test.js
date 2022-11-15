import { Ship, Gameboard, Player } from "./gameLogic";

test("Ship factory", () => {
  const shipy = Ship(5, true);
  expect(shipy.length).toBe(5);
  expect(shipy.timesHit).toBe(0);
  shipy.hit();
  expect(shipy.timesHit).not.toBe(0);
  expect(shipy.timesHit).toBe(1);
  expect(shipy.isSunk()).toBe(false);
  shipy.hit();
  shipy.hit();
  shipy.hit();
  shipy.hit();
  expect(shipy.isSunk()).not.toBe(false);
  expect(shipy.isSunk()).toBe(true);
});

test("gameboard.board to be 10x10 null filled", () => {
  const gameboard = Gameboard(10);
  expect(gameboard.board.length).toBe(10);
  for (let i = 0; i < gameboard.length; i++) {
    expect(gameboard.board[i].length).toBe(10);
    for (let j = 0; j < gameboard.board[i].length; j++) {
      expect(gameboard.board[i][j]).toBe(null);
    }
  }
});

test("gameboard places vertical ship with length=8 at [1,2]", () => {
  const gameboard = Gameboard(10);
  const shipy = gameboard.placeShip(8, true, 1, 2);
  expect(gameboard.board[1][2]).toEqual(shipy);
  expect(gameboard.board[1][3]).toEqual(shipy);
  expect(gameboard.board[1][4]).toEqual(shipy);
  expect(gameboard.board[1][5]).toEqual(shipy);
  expect(gameboard.board[1][6]).toEqual(shipy);
  expect(gameboard.board[1][7]).toEqual(shipy);
  expect(gameboard.board[1][8]).toEqual(shipy);
  expect(gameboard.board[1][9]).toEqual(shipy);
});

test("gameboard doesn't place too long ship", () => {
  const gameboard = Gameboard(10);
  gameboard.placeShip(9, true, 1, 2);
  expect(gameboard.board[1][2]).toBe(null);
  expect(gameboard.board[1][3]).toBe(null);
  expect(gameboard.board[1][4]).toBe(null);
  expect(gameboard.board[1][5]).toBe(null);
  expect(gameboard.board[1][6]).toBe(null);
  expect(gameboard.board[1][7]).toBe(null);
  expect(gameboard.board[1][8]).toBe(null);
  expect(gameboard.board[1][9]).toBe(null);
  gameboard.placeShip(9, false, 2, 2);
  expect(gameboard.board[1][2]).toBe(null);
  expect(gameboard.board[2][2]).toBe(null);
  expect(gameboard.board[3][2]).toBe(null);
  expect(gameboard.board[4][2]).toBe(null);
  expect(gameboard.board[5][2]).toBe(null);
  expect(gameboard.board[6][2]).toBe(null);
  expect(gameboard.board[7][2]).toBe(null);
  expect(gameboard.board[8][2]).toBe(null);
  expect(gameboard.board[9][2]).toBe(null);
});

test("gameboard places horizontal ship with length=6 at [2,4]", () => {
  const gameboard = Gameboard(10);
  const shipy = gameboard.placeShip(6, false, 2, 4);
  expect(gameboard.board[2][4]).toEqual(shipy);
  expect(gameboard.board[3][4]).toEqual(shipy);
  expect(gameboard.board[4][4]).toEqual(shipy);
  expect(gameboard.board[5][4]).toEqual(shipy);
  expect(gameboard.board[6][4]).toEqual(shipy);
  expect(gameboard.board[7][4]).toEqual(shipy);
});

test("gameboard doesn't place a ship where a previous one exists", () => {
  const gameboard = Gameboard(10);
  gameboard.placeShip(6, true, 4, 0);
  expect(gameboard.placeShip(6, false, 2, 2)).toBe(
    "There's another ship there!"
  );
  const ship2 = gameboard.placeShip(6, false, 2, 7);
  expect(gameboard.board[2][7]).toEqual(ship2);
  expect(gameboard.board[3][7]).toEqual(ship2);
  expect(gameboard.board[4][7]).toEqual(ship2);
  expect(gameboard.board[5][7]).toEqual(ship2);
  expect(gameboard.board[6][7]).toEqual(ship2);
  expect(gameboard.board[7][7]).toEqual(ship2);
});

test("gameboard.receiveAttack functionalities", () => {
  const gameboard = Gameboard(10);
  const ship = gameboard.placeShip(6, true, 4, 0);
  const attacked = gameboard.receiveAttack(4, 0);
  expect(attacked).toEqual(ship);
  expect(ship.timesHit).toBe(1);
  gameboard.receiveAttack(4, 1);
  gameboard.receiveAttack(4, 2);
  gameboard.receiveAttack(4, 3);
  gameboard.receiveAttack(4, 4);
  expect(ship.isSunk()).toBe(false);
  gameboard.receiveAttack(4, 5);
  expect(ship.isSunk()).toBe(true);
  expect(gameboard.receiveAttack(4, 4)).toBe("Position already attacked!");
});

test("gameboard.receiveAttack: All ships sunk", () => {
  const gameboard = Gameboard(10);
  gameboard.placeShip(5, true, 3, 3);
  gameboard.placeShip(4, false, 4, 4);
  gameboard.receiveAttack(3, 3);
  gameboard.receiveAttack(3, 4);
  gameboard.receiveAttack(3, 5);
  gameboard.receiveAttack(3, 6);
  expect(gameboard.receiveAttack(3, 7)).toEqual(gameboard.board[3][7]);
  gameboard.receiveAttack(4, 4);
  gameboard.receiveAttack(5, 4);
  gameboard.receiveAttack(6, 4);
  expect(gameboard.receiveAttack(7, 4)).toBe("All ships sunk!");
});

test("gameboard.receiveAttack: no-hit Attack: Water", () => {
  const gameboard = Gameboard(10);
  gameboard.placeShip(3, false, 3, 3);

  // No ship in [5, 5];
  expect(gameboard.receiveAttack(5, 5)).toBe("Water!");

  // Ship hit in [4, 3]; so the ship object that is being attacked is returned.
  expect(gameboard.receiveAttack(4, 3)).toEqual(gameboard.board[4][3]);
});

test("Player factory", () => {
  const player1Gameboard = Gameboard(10);
  const player1 = Player(true, "Rinzai", player1Gameboard);
  expect(player1.isFirstPlayer).toBe(true);
  expect(player1.name).toBe("Rinzai");
  expect(player1.gameboard).toStrictEqual(player1Gameboard);

  expect(player1.gameboard.placeShip(2, true, 2, 2)).toStrictEqual(
    player1.gameboard.board[2][2]
  );
});
