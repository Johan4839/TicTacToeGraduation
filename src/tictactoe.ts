class TicTacToe {
  board: string[][];

  player1: string;

  player2: string;

  activePlayer: string;

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    this.player1 = "X";

    this.player2 = "O";

    this.activePlayer = this.player1;
  }
}

export { TicTacToe };
