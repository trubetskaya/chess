import {Color} from "./Color";
import {Figure} from "./Figure";
import {Board} from "./Board";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Color;
    figure: Figure | null = null;
    board: Board;
    id: number;

    constructor(x: number, y: number, color: Color, board: Board) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.board = board;
        this.id = Math.random();
    }

    moveFigure(toCell: Cell) {
        toCell.figure = this.figure;
        if (toCell.figure) {
            toCell.figure.cell = toCell;
        }
        this.figure = null;
    }
}
