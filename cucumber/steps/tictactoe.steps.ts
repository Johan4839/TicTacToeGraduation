import { loadFeature, defineFeature } from "jest-cucumber";
import { templateFunction } from "../../src/template";

const feature = loadFeature("./cucumber/features/tictactoe.feature");

defineFeature(feature, (test) => {
  test("Horizontal victory", ({ given, and, when, then }) => {
    given("a game of Tic Tac Toe", () => {});

    and("two players want to play", () => {});

    and(/^there is a (\d+)x(\d+) board$/, (arg0, arg1) => {});

    and(/^player (\d+) plays with the X$/, (arg0) => {});

    and(/^player (\d+) plays with the O$/, (arg0) => {});

    and(/^player (\d+) plays at \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {});

    and(/^player (\d+) plays at \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {});

    and(/^player (\d+) plays at \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {});

    and(/^player (\d+) plays at \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {});

    when(/^player (\d+) plays at \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {});

    then(/^player (\d+) should be the winner of the game$/, (arg0) => {});
  });
});
