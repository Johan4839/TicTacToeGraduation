import { TicTacToe } from "../../src/tictactoe";

export function player1AlmostHorizontalVictory() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(1, 0);
  game.play(0, 1);
  game.play(1, 1);
  return game;
}

export function player2AlmostVerticalVictory() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(0, 1);
  game.play(1, 0);
  game.play(1, 1);
  game.play(0, 2);
  return game;
}

export function player1AlmostDiagonalVictory() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(1, 0);
  game.play(1, 1);
  game.play(1, 2);
  game.play(0, 2);
  game.play(0, 1);
  return game;
}

export function boardWithDraw() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(1, 1);
  game.play(0, 1);
  game.play(0, 2);
  game.play(2, 0);
  game.play(1, 0);
  game.play(1, 2);
  game.play(2, 1);
  game.play(2, 2);
  return game;
}
