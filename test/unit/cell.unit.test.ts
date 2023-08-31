import Cell from "../../src/cell";

describe("A cell that is created is empty", () => {
  it("new cell --> empty", () => {
    const cell = new Cell();
    const cellValue = cell.getCellValue();
    expect(cellValue).toEqual(" ");
  });
  it("should only contain an X or an O", () => {
    const cell = new Cell();
    cell.setCellValue("X");
    const cellValue = cell.getCellValue();
    expect(cellValue).toEqual("X");
  });
});
