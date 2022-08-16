import logo from '../assets/black_king.png';
import {Cell} from "./Cell";
import {Color} from "./Color";

export enum FigureNames {
    FIGURE = "Figure",
    KING = "King",
    QUEEN = "Queen",
    ROOK = "Rook",
    BISHOP = "Bishop",
}

export class Figure {
    cell: Cell|null;
    color: Color;
    logo: typeof logo | null;
    name: string;

    constructor(cell: Cell, color:Color) {
        this.cell = cell;
        this.color = color;
        this.logo = null;
        this.name = FigureNames.FIGURE;
    }

    canMove(toCell: Cell): boolean {
        if (toCell.id === this.cell?.id) {
            return false;
        }
        if (toCell.figure?.color === this.color) {
            return false;
        }
        if (toCell.figure?.name === FigureNames.KING) {
            return false;
        }
        return true;
    }
}

