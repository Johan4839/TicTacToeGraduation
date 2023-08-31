import { Board } from "../../src/board";

describe("When setting up the game a board of 3x3 needs to be create", () => {
  it("new game creates a 3x3 empty board ", () => {
    const board = new Board();
    const boardState = board.displayBoard();
    expect(boardState).toEqual([
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
  });
});
