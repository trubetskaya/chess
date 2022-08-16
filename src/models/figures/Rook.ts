import {Figure, FigureNames} from "../Figure";
import {Cell} from "../Cell";
import {Color} from "../Color";
import blackLogo from '../../assets/black_rook.png';
import whiteLogo from '../../assets/white_rook.png';

export class Rook extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(toCell: Cell): boolean {
        if (super.canMove(toCell)) {
            return this.cell?.x === toCell.x || this.cell?.y === toCell.y;
        }
        return false;
    }
}
