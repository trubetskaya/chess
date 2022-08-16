import {Figure, FigureNames} from "../Figure";
import {Cell} from "../Cell";
import {Color} from "../Color";
import blackLogo from '../../assets/black_king.png'
import whiteLogo from '../../assets/white_king.png'

export class King extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(toCell: Cell): boolean {
        if (super.canMove(toCell)) {
            if (
                this.cell
                && (Math.abs(this.cell.x - toCell.x) <= 1)
                && (Math.abs(this.cell.y - toCell.y) <= 1)
            ) {
                return true;
            }
        }
        return false;
    }
}
