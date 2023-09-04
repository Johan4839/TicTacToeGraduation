import { TicTacToe } from "../../src/tictactoe";
import {
  boardWithDraw,
  player1AlmostDiagonalVictory,
  player1AlmostHorizontalVictory,
  player2AlmostVerticalVictory,
} from "../doubles/double";

describe("When playing TicTacToe", () => {
  const game = new TicTacToe();
  it("player 1 starts at (0,0) --> valid", () => {
    game.play(0, 0);
    expect(game.board[0][0]).toEqual("X");
    expect(game.activePlayer).toEqual(game.player2);
  });
  it("player 2 then plays at (0,0) --> invalid", () => {
    game.play(0, 0);
    expect(game.board[0][0]).toEqual("X");
    expect(game.activePlayer).toEqual(game.player2);
  });
});

describe("After a while it is possible a victory occurs", () => {
  describe("first we check the horizontal victory", () => {
    it("player 1 almost wins with a horizontal victory when he has two X in the top row", () => {
      const game = player1AlmostHorizontalVictory();
      expect(game.winner).toEqual(undefined);
    });
    it("if he then plays an X at (3,0) the move is invalid and he has to try again", () => {
      const game = player1AlmostHorizontalVictory();
      game.play(3, 0);
      expect(game.activePlayer).toEqual(game.player1);
    });
    it("if he then plays an X at (0,2) he wins", () => {
      const game = player1AlmostHorizontalVictory();
      game.play(0, 2);
      expect(game.winner).toEqual(game.player1);
    });
  });
  describe("then we check the situation where player 2 wins by vertical victory", () => {
    it("player 2 almost wins with a vertical victory if he has two X in the first column", () => {
      const game = player2AlmostVerticalVictory();
      expect(game.winner).toEqual(undefined);
    });
    it("if he then plays an O at (2,2) he wins", () => {
      const game = player2AlmostVerticalVictory();
      game.play(2, 1);
      expect(game.winner).toEqual(game.player2);
    });
  });
  describe("then we check the situation where player 1 wins by diagonal victory", () => {
    it("player 1 has two crosses in the first and second diagonal, so no yet victorious", () => {
      const game = player1AlmostDiagonalVictory();
      expect(game.winner).toEqual(undefined);
    });
    it("if he then plays an X at (2,2) he wins", () => {
      const game = player1AlmostDiagonalVictory();
      game.play(2, 2);
      expect(game.winner).toEqual(game.player1);
    });
    it("or if he plays an X at (2,0) he also wins", () => {
      const game = player1AlmostDiagonalVictory();
      game.play(2, 0);
      expect(game.winner).toEqual(game.player1);
    });
  });
  describe("or the game ends in a draw", () => {
    it("when there is no winner and the board is full", () => {
      const game = boardWithDraw();
      expect(game.winner).toEqual("draw");
    });
  });
});

describe("We want the game to be played by bots", () => {
  it("the bot should be able to play the game", () => {
    const game = new TicTacToe();
    game.playBotvsBot();
    expect(game.winner).toBeDefined();
  });
});
