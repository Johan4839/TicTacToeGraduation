class Player {
  private symbol: string;

  constructor(symbol: string) {
    this.symbol = symbol;
  }

  getPlayerSymbol() {
    return this.symbol;
  }
}

export { Player };
