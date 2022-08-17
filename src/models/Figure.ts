import logo from '../assets/black_king.png';
import {Cell} from "./Cell";
import {Color} from "./Color";
import {Board} from "./Board";

export enum FigureNames {
    FIGURE = "Figure",
    KING = "King",
    QUEEN = "Queen",
    ROOK = "Rook",
    BISHOP = "Bishop",
}

export class Figure {
    cell: Cell | null;
    color: Color;
    logo: typeof logo | null;
    name: string;

    constructor(cell: Cell, color: Color) {
        this.cell = cell;
        this.color = color;
        this.logo = null;
        this.name = FigureNames.FIGURE;
    }

    canMove(toCell: Cell, check: boolean = false): boolean {
        if (toCell.id === this.cell?.id) {
            return false;
        }
        if (toCell.figure?.color === this.color) {
            return false;
        }
        if (!check && toCell.figure?.name === FigureNames.KING) {
            return false;
        }
        return true;
    }

    validateLineDirection(from: Cell, to: Cell): boolean {
        const board = from.board;
        if (from.x === to.x) {
            if (from.y < to.y) {
                let y = from.y + 1;
                while (y !== to.y) {
                    if (board.cells[from.x][y].figure !== null) {
                        console.log(1)
                        return false;
                    }
                    y++;
                }
            } else {
                if (from.y > to.y) {
                    let y = from.y - 1;
                    while (y !== to.y) {
                        if (board.cells[from.x][y].figure !== null) {
                            return false;
                        }
                        y--;
                    }
                }
            }
        } else {
            if (from.x < to.x) {
                let x = from.x + 1;
                while (x !== to.x) {
                    if (board.cells[x][from.y].figure !== null) {
                        return false;
                    }
                    x++;
                }
            } else {
                let x = from.x - 1;
                while (x !== to.x) {
                    if (board.cells[x][from.y].figure !== null) {
                        return false;
                    }
                    x--;
                }
            }
        }
        return true;
    }
}

