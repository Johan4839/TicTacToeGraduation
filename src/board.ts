import Cell from "./cell";

class Board {
  private board: Cell[][];

  private boardSize = 3;

  constructor() {
    this.board = Array.from({ length: this.boardSize }).map(() =>
      Array.from<Cell>({ length: this.boardSize }).fill(new Cell())
    );
  }

  displayBoard(): string[][] {
    return this.board.map((row) => row.map((cell) => cell.getCellValue()));
  }
}

export { Board };

// export function createBoard(): string[][] {
//   return [
//     [" ", " ", " "],
//     [" ", " ", " "],
//     [" ", " ", " "],
//   ];
// }
