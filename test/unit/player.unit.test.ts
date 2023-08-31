import { Player } from "../../src/player2";

describe("A game of TicTacToe has two players", () => {
  it("player 1 plays with an X", () => {
    const player1 = new Player("X");
    const player1Symbol = player1.getPlayerSymbol();
    expect(player1Symbol).toEqual("X");
  });
  it("player 2 plays with an O", () => {
    const player2 = new Player("O");
    const player2Symbol = player2.getPlayerSymbol();
    expect(player2Symbol).toEqual("O");
    // eslint-disable-next-line no-console
    console.log(Player);
  });
});
