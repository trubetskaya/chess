import {Cell} from "./Cell";
import {Color} from "./Color";
import {Rook} from "./figures/Rook";
import {Bishop} from "./figures/Bishop";
import {Queen} from "./figures/Queen";
import {King} from "./figures/King";

export class Board {
    cells: Cell[][] = [];

    initCells() {
        for (let i = 0; i < 6; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 6; j++) {
                if (i % 2 === j % 2) {
                    row.push(new Cell(i, j, Color.WHITE))
                } else {
                    row.push(new Cell(i, j, Color.BLACK))
                }
            }
            this.cells.push(row);
        }
    }

    initFigures() {
        this.cells[0][0].figure = new Rook(this.cells[0][0], Color.BLACK);
        this.cells[0][5].figure = new Rook(this.cells[0][5], Color.BLACK);
        this.cells[0][1].figure = new Bishop(this.cells[0][1], Color.BLACK);
        this.cells[0][4].figure = new Bishop(this.cells[0][4], Color.BLACK);
        this.cells[0][2].figure = new Queen(this.cells[0][2], Color.BLACK);
        this.cells[0][3].figure = new King(this.cells[0][3], Color.BLACK);


        this.cells[5][0].figure = new Rook(this.cells[5][0], Color.WHITE);
        this.cells[5][5].figure = new Rook(this.cells[5][5], Color.WHITE);
        this.cells[5][1].figure = new Bishop(this.cells[5][1], Color.WHITE);
        this.cells[5][4].figure = new Bishop(this.cells[5][4], Color.WHITE);
        this.cells[5][2].figure = new Queen(this.cells[5][2], Color.WHITE);
        this.cells[5][3].figure = new King(this.cells[5][3], Color.WHITE);

    }
}
