import { TicTacToe } from "../../src/tictactoe";

describe("TicTacToe is a game which is played", () => {
  describe("on a board", () => {
    it("which is 3x3", () => {
      const game = new TicTacToe();
      expect(game.board.length).toEqual(3);
      expect(game.board[0].length).toEqual(3);
    });
    it("and is empty at the beginning", () => {
      const game = new TicTacToe();
      expect(game.board).toEqual([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    });
  });
  describe("by two players", () => {
    const game = new TicTacToe();
    it("player 1 plays with an X", () => {
      expect(game.player1).toEqual("X");
    });
    it("player 2 plays with an O", () => {
      expect(game.player2).toEqual("O");
    });
    it("player 1 starts", () => {
      expect(game.activePlayer).toEqual(game.player1);
    });
  });
  describe("when a player takes a turn he can place a mark", () => {
    describe("first we verify if the move is on the board", () => {
      it("(0,0) --> valid", () => {
        expect(TicTacToe.isCellOnBoard(0, 0)).toEqual(true);
      });
      it("(3,0) --> invalid", () => {
        expect(TicTacToe.isCellOnBoard(3, 0)).toEqual(false);
      });
      it("(0,3) --> invalid", () => {
        expect(TicTacToe.isCellOnBoard(0, 3)).toEqual(false);
      });
    });
    describe("then we verify the cell is empty", () => {
      const game = new TicTacToe();
      it("(0,0) is empty --> true", () => {
        expect(game.isCellEmpty(0, 0)).toEqual(true);
      });
      it("(0,0) is contains X --> false", () => {
        game.board[0][0] = "X";
        expect(game.isCellEmpty(0, 0)).toEqual(false);
      });
      it("(0,0) contains O --> false", () => {
        game.board[0][0] = "O";
        expect(game.isCellEmpty(0, 0)).toEqual(false);
      });
    });
    describe("then we can place a mark", () => {
      const game = new TicTacToe();
      it("player 1 places his mark at (0,0)", () => {
        game.placeMark(0, 0);
        expect(game.board[0][0]).toEqual("X");
      });
      it("player 2 places his mark at (0,1)", () => {
        game.activePlayer = game.player2;
        game.placeMark(0, 1);
        expect(game.board[0][1]).toEqual("O");
      });
      it("player 1 places his mark at (0,1)", () => {
        game.activePlayer = game.player1;
        expect(game.placeMark(0, 1)).toEqual(false);
      });
    });
    describe("after placing a mark succesfully the active player is switched", () => {
      const game = new TicTacToe();
      it("player 1 places his mark at (0,0)", () => {
        game.switchActivePlayer();
        expect(game.activePlayer).toEqual(game.player2);
      });
      it("player 2 places his mark at (0,1)", () => {
        game.switchActivePlayer();
        expect(game.activePlayer).toEqual(game.player1);
      });
    });
    describe("winning the game happens if there are three consecutive marks", () => {
      describe("first we check for a horizontal victory", () => {
        it("three in a row is a victory", () => {
          const game = new TicTacToe();
          game.board = [
            ["X", "X", "X"],
            ["", "", ""],
            ["", "", ""],
          ];
          game.activePlayer = "X";
          const result = game.checkHorizontalVictory();
          expect(result).toEqual(true);
        });
        it("two in a row is not a horizontal victory", () => {
          const game = new TicTacToe();
          game.board = [
            ["X", "X", ""],
            ["", "", ""],
            ["", "", ""],
          ];
          game.activePlayer = "X";
          const result = game.checkHorizontalVictory();
          expect(result).toEqual(false);
        });
        describe("then for a vertical victory", () => {
          it("three in a column is a victory", () => {
            const game = new TicTacToe();
            game.board = [
              ["X", "", ""],
              ["X", "", ""],
              ["X", "", ""],
            ];
            game.activePlayer = "X";
            const result = game.checkVerticalVictory();
            expect(result).toEqual(true);
          });
          it("two in a column is not a vertical victory", () => {
            const game = new TicTacToe();
            game.board = [
              ["X", "", ""],
              ["X", "", ""],
              ["", "", ""],
            ];
            game.activePlayer = "X";
            const result = game.checkVerticalVictory();
            expect(result).toEqual(false);
          });
        });
        describe("and for a diagonal victory", () => {
          it("three in a diagonal is a victory", () => {
            const game = new TicTacToe();
            game.board = [
              ["X", "", ""],
              ["", "X", ""],
              ["", "", "X"],
            ];
            game.activePlayer = "X";
            const result = game.checkDiagonalVictory();
            expect(result).toEqual(true);
          });
          it("two in a diagonal is not a diagonal victory", () => {
            const game = new TicTacToe();
            game.board = [
              ["X", "", ""],
              ["", "X", ""],
              ["", "", ""],
            ];
            game.activePlayer = "X";
            const result = game.checkDiagonalVictory();
            expect(result).toEqual(false);
          });
          it("three in the other diagonal is a victory", () => {
            const game = new TicTacToe();
            game.board = [
              ["", "", "X"],
              ["", "X", ""],
              ["X", "", ""],
            ];
            game.activePlayer = "X";
            const result = game.checkDiagonalVictory();
            expect(result).toEqual(true);
          });
          it("two in the other diagonal is not a diagonal victory", () => {
            const game = new TicTacToe();
            game.board = [
              ["", "", "X"],
              ["", "X", ""],
              ["", "", ""],
            ];
            game.activePlayer = "X";
            const result = game.checkDiagonalVictory();
            expect(result).toEqual(false);
          });
        });
      });
      describe("when all cells are occupied but there is no winner yet the game ends in a draw", () => {
        it("to do so we check if all cells are occupied", () => {
          const game = new TicTacToe();
          game.board = [
            ["X", "O", "X"],
            ["X", "O", "O"],
            ["O", "X", "X"],
          ];
          game.activePlayer = "X";
          expect(game.checkAllCellsOccupied()).toEqual(true);
        });
        it("the game does not end in a draw if there is a cell unoccupied", () => {
          const game = new TicTacToe();
          game.board = [
            ["X", "O", "X"],
            ["X", "O", "O"],
            ["O", "X", ""],
          ];
          game.activePlayer = "X";
          expect(game.checkAllCellsOccupied()).toEqual(false);
        });
      });
    });
  });
});

describe("We want to play the game with bots", () => {
  describe("a bot should be able to play a move", () => {
    it("we need to pick a coordinate the bot can play", () => {
      const coordinate = TicTacToe.pickCoordinates();
      expect(coordinate.length).toEqual(2);
      expect(coordinate[0]).toBeGreaterThan(-1);
      expect(coordinate[0]).toBeLessThan(3);
      expect(coordinate[1]).toBeGreaterThan(-1);
      expect(coordinate[1]).toBeLessThan(3);
    });
    it("then we need the bot to play a move", () => {
      const game = new TicTacToe();
      const coordinate = TicTacToe.pickCoordinates();
      game.play(coordinate[0], coordinate[1]);
      expect(game.board[coordinate[0]][coordinate[1]]).toEqual("X");
    });
  });
});
