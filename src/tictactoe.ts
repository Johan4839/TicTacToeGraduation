class TicTacToe {
  board: string[][];

  player1: string;

  player2: string;

  activePlayer: string;

  winner: string | undefined;

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    this.player1 = "X";

    this.player2 = "O";

    this.activePlayer = this.player1;

    this.winner = undefined;
  }

  play(x: number, y: number): void {
    if (this.placeMark(x, y)) {
      this.checkResult();
      this.switchActivePlayer();
    }
  }

  placeMark(x: number, y: number): boolean {
    if (TicTacToe.isCellOnBoard(x, y) && this.isCellEmpty(x, y)) {
      this.board[x][y] = this.activePlayer;
      return true;
    }
    return false;
  }

  static isCellOnBoard(x: number, y: number): boolean {
    return x >= 0 && x < 3 && y >= 0 && y < 3;
  }

  isCellEmpty(x: number, y: number): boolean {
    return this.board[x][y] === "";
  }

  switchActivePlayer(): void {
    this.activePlayer =
      this.activePlayer === this.player1 ? this.player2 : this.player1;
  }

  checkHorizontalVictory(): boolean {
    for (let i = 0; i < 3; i += 1) {
      if (
        this.board[i][0] === this.activePlayer &&
        this.board[i][1] === this.activePlayer &&
        this.board[i][2] === this.activePlayer
      ) {
        return true;
      }
    }
    return false;
  }

  checkVerticalVictory(): boolean {
    for (let i = 0; i < 3; i += 1) {
      if (
        this.board[0][i] === this.activePlayer &&
        this.board[1][i] === this.activePlayer &&
        this.board[2][i] === this.activePlayer
      ) {
        return true;
      }
    }
    return false;
  }

  checkDiagonalVictory(): boolean {
    return (
      (this.board[0][0] === this.activePlayer &&
        this.board[1][1] === this.activePlayer &&
        this.board[2][2] === this.activePlayer) ||
      (this.board[0][2] === this.activePlayer &&
        this.board[1][1] === this.activePlayer &&
        this.board[2][0] === this.activePlayer)
    );
  }

  checkWin(): boolean {
    return (
      this.checkHorizontalVictory() ||
      this.checkVerticalVictory() ||
      this.checkDiagonalVictory()
    );
  }

  checkAllCellsOccupied(): boolean {
    return this.board.every((row) => row.every((cell) => cell !== ""));
  }

  checkResult(): string {
    if (this.checkWin()) {
      this.winner = this.activePlayer;
      return `${this.activePlayer} wins`;
    }
    if (this.checkAllCellsOccupied()) {
      this.winner = "draw";
      return "draw";
    }
    return "continue";
  }

  static pickCoordinates(): number[] {
    const x = Math.floor(Math.random() * 3);
    const y = Math.floor(Math.random() * 3);
    return [x, y];
  }

  playBotvsBot(): void {
    while (this.winner === undefined) {
      const [x, y] = TicTacToe.pickCoordinates();
      this.play(x, y);
    }
  }
}

export { TicTacToe };
