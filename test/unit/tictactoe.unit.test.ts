import { TicTacToe } from "../../src/tictactoe";

describe("TicTacToe is a game which is played", () => {
  describe("on a board", () => {
    it("which is 3x3", () => {
      const game = new TicTacToe();
      expect(game.board.length).toEqual(3);
      expect(game.board[0].length).toEqual(3);
    });
    it("and is empty at the beginning", () => {
      const game = new TicTacToe();
      expect(game.board).toEqual([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    });
  });
  describe("by two players", () => {
    it("player 1 plays with an X", () => {
      const game = new TicTacToe();
      expect(game.player1).toEqual("X");
    });
    it("player 2 plays with an O", () => {
      const game = new TicTacToe();
      expect(game.player2).toEqual("O");
    });
    it("player 1 starts", () => {
      const game = new TicTacToe();
      expect(game.activePlayer).toEqual("X");
    });
  });
});
