import {
  Ship,
  Gameboard,
  Player,
  fromAttackObj,
  iA,
  computerAttack
} from "./gameLogic";

test("Ship factory", () => {
  const shipy = Ship("0", 5, true);
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
  const shipy = gameboard.placeShip("0", 8, true, 1, 2);
  expect(typeof gameboard.board[1][2]).toEqual("object");
  expect(typeof gameboard.board[1][3]).toEqual("object");
  expect(typeof gameboard.board[1][4]).toEqual("object");
  expect(typeof gameboard.board[1][5]).toEqual("object");
  expect(typeof gameboard.board[1][6]).toEqual("object");
  expect(typeof gameboard.board[1][7]).toEqual("object");
  expect(typeof gameboard.board[1][8]).toEqual("object");
  expect(typeof gameboard.board[1][9]).toEqual("object");
});

test("gameboard doesn't place too long ship", () => {
  const gameboard = Gameboard(10);
  gameboard.placeShip("0", 9, true, 1, 2);
  expect(gameboard.board[1][2]).toBe(null);
  expect(gameboard.board[1][3]).toBe(null);
  expect(gameboard.board[1][4]).toBe(null);
  expect(gameboard.board[1][5]).toBe(null);
  expect(gameboard.board[1][6]).toBe(null);
  expect(gameboard.board[1][7]).toBe(null);
  expect(gameboard.board[1][8]).toBe(null);
  expect(gameboard.board[1][9]).toBe(null);
  gameboard.placeShip("1", 9, false, 2, 2);
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
  const shipy = gameboard.placeShip("0", 6, false, 2, 4);
  expect(typeof gameboard.board[2][4]).toEqual("object");
  expect(typeof gameboard.board[3][4]).toEqual("object");
  expect(typeof gameboard.board[4][4]).toEqual("object");
  expect(typeof gameboard.board[5][4]).toEqual("object");
  expect(typeof gameboard.board[6][4]).toEqual("object");
  expect(typeof gameboard.board[7][4]).toEqual("object");
});

test("gameboard doesn't place a ship where a previous one exists", () => {
  const gameboard = Gameboard(10);
  gameboard.placeShip("0", 6, true, 4, 0);
  expect(gameboard.placeShip("1", 6, false, 2, 2)).toBe(
    "There's another ship there!"
  );
  gameboard.placeShip(6, false, 2, 7);
  expect(typeof gameboard.board[2][7]).toEqual("object");
  expect(typeof gameboard.board[3][7]).toEqual("object");
  expect(typeof gameboard.board[4][7]).toEqual("object");
  expect(typeof gameboard.board[5][7]).toEqual("object");
  expect(typeof gameboard.board[6][7]).toEqual("object");
  expect(typeof gameboard.board[7][7]).toEqual("object");
});

test("gameboard.receiveAttack functionalities", () => {
  const gameboard = Gameboard(10);
  gameboard.placeShip("0", 6, true, 4, 0);
  gameboard.receiveAttack(4, 0);
  expect(gameboard.board[4][0].timesHit).toBe(1);
  gameboard.receiveAttack(4, 1);
  gameboard.receiveAttack(4, 2);
  gameboard.receiveAttack(4, 3);
  gameboard.receiveAttack(4, 4);
  expect(gameboard.board[4][0].isSunk()).toBe(false);
  gameboard.receiveAttack(4, 5);
  expect(gameboard.board[4][0].isSunk()).toBe(true);
  expect(gameboard.receiveAttack(4, 4)).toBe(
    "¡Esa posición ya ha sido atacada!"
  );
});

test("gameboard.receiveAttack: All ships sunk", () => {
  const gameboard = Gameboard(10);
  gameboard.placeShip("0", 5, true, 3, 3);
  gameboard.placeShip("1", 4, false, 4, 4);
  gameboard.receiveAttack(3, 3);
  gameboard.receiveAttack(3, 4);
  gameboard.receiveAttack(3, 5);
  gameboard.receiveAttack(3, 6);
  gameboard.receiveAttack(3, 7);
  gameboard.receiveAttack(4, 4);
  gameboard.receiveAttack(5, 4);
  gameboard.receiveAttack(6, 4);
  expect(gameboard.receiveAttack(7, 4)).toBe(
    "¡Todos los barcos han sido hundidos!"
  );
});

test("gameboard.receiveAttack: no-hit Attack: Water", () => {
  const gameboard = Gameboard(10);
  gameboard.placeShip("0", 3, false, 3, 3);

  expect(gameboard.receiveAttack(3, 3)).toBe("¡Barco tocado!");
  // No ship in [5, 5];
  expect(gameboard.receiveAttack(5, 5)).toBe("¡Agua!");
});

test("Player factory", () => {
  const player1Gameboard = Gameboard(10);
  const player1 = Player("Rinzai", player1Gameboard);
  expect(player1.name).toBe("Rinzai");
  expect(player1.gameboard).toStrictEqual(player1Gameboard);

  expect(player1.gameboard.placeShip("0", 2, true, 2, 2)).toStrictEqual([
    [2, 2],
    [2, 3]
  ]);
});

// Intelligence
test("computerAttacks sinks one vertical ship", () => {
  // 1- Create gameboard, player and place a vertical ship of length 5
  const player1Gameboard = Gameboard(10);
  const player1 = Player("Rinzai", player1Gameboard);

  player1.gameboard.placeShip("0", 5, true, 2, 2);

  // 2- computerAttack will attack randomly until iA === true on the first hit
  let firstHit;

  do {
    firstHit = computerAttack(10, player1);
  } while (iA === false);

  expect(iA).toBe(true);
  expect(firstHit).toStrictEqual(fromAttackObj);

  // 3- Continue attacking until attack.result === "¡Todos los barcos han sido hundidos!"

  let attack = { ...firstHit };

  while (attack.result !== "¡Todos los barcos han sido hundidos!") {
    attack = computerAttack(10, player1);
  }

  expect(attack.result).toBe("¡Todos los barcos han sido hundidos!");
});

test("computerAttacks sinks one horizontal ship", () => {
  // 1- Create gameboard, player and place a horizontal ship of length 5
  const player1Gameboard = Gameboard(10);
  const player1 = Player("Rinzai", player1Gameboard);

  player1.gameboard.placeShip("0", 5, false, 2, 2);

  // 2- computerAttack will attack randomly until iA === true on the first hit
  let firstHit;

  do {
    firstHit = computerAttack(10, player1);
  } while (iA === false);

  expect(iA).toBe(true);
  expect(firstHit).toStrictEqual(fromAttackObj);

  // console.log("After 1st Hit:");
  // console.log({ fromAttackObj });
  // console.log({ nextAttackDir });
  // console.log({ firstHitIa });

  // 3- Continue attacking until attack.result === "¡Todos los barcos han sido hundidos!"

  let attack = { ...firstHit };
  let n = 1;

  while (attack.result !== "¡Todos los barcos han sido hundidos!") {
    attack = computerAttack(10, player1);
    // console.log(`After attack number ${n}:`);
    n += 1;
    // console.log({ attack });
    // console.log({ fromAttackObj });
    // console.log({ nextAttackDir });
    // console.log({ firstHitIa });
  }

  expect(attack.result).toBe("¡Todos los barcos han sido hundidos!");
  expect(n).toBeLessThan(10);
});
