class Cell {
  private cell: string;

  constructor() {
    this.cell = " ";
  }

  getCellValue(): string {
    return this.cell;
  }

  setCellValue(value: string): void {
    this.cell = value;
  }
}

export default Cell;
