import { loadFeature, defineFeature } from "jest-cucumber";
import { TicTacToe } from "../../src/tictactoe";

const feature = loadFeature("./cucumber/features/tictactoe.feature");

defineFeature(feature, (test) => {
  test("Horizontal victory", ({ given, and, when, then }) => {
    const game = new TicTacToe();
    given("a game of Tic Tac Toe", () => {});

    and("two players want to play", () => {});

    and("there is a 3x3 empty board", () => {
      expect(game.board.length).toEqual(3);
      expect(game.board[0].length).toEqual(3);
      expect(game.board).toEqual([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    });

    and("player 1 plays with the X", () => {
      expect(game.player1).toEqual("X");
    });

    and("player 2 plays with the O", () => {
      expect(game.player2).toEqual("O");
    });

    and(/^player 1 plays at \((\d+),(\d+)\)$/, (arg1, arg2) => {
      game.play(arg1, arg2);
      expect(game.board[arg1][arg2]).toEqual("X");
      expect(game.activePlayer).toEqual(game.player2);
    });

    and(/^player 2 plays at \((\d+),(\d+)\)$/, (arg1, arg2) => {
      game.play(arg1, arg2);
      expect(game.board[arg1][arg2]).toEqual("O");
      expect(game.activePlayer).toEqual(game.player1);
    });

    and(/^player 1 plays at \((\d+),(\d+)\)$/, (arg1, arg2) => {
      game.play(arg1, arg2);
      expect(game.board[arg1][arg2]).toEqual("X");
      expect(game.activePlayer).toEqual(game.player2);
    });

    and(/^player 2 plays at \((\d+),(\d+)\)$/, (arg1, arg2) => {
      game.play(arg1, arg2);
      expect(game.board[arg1][arg2]).toEqual("O");
      expect(game.activePlayer).toEqual(game.player1);
    });

    when(/^player 1 plays at \((\d+),(\d+)\)$/, (arg1, arg2) => {
      game.play(arg1, arg2);
      expect(game.board[arg1][arg2]).toEqual("X");
      // expect(game.activePlayer).toEqual(game.player2);
    });

    then("player 1 should be the winner of the game", () => {
      expect(game.winner).toBe(game.player1);
    });
  });
});
