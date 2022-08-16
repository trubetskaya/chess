import {Figure, FigureNames} from "../Figure";
import {Cell} from "../Cell";
import {Color} from "../Color";
import blackLogo from '../../assets/black_queen.png';
import whiteLogo from '../../assets/white_queen.png';

export class Queen extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }

    canMove(toCell: Cell): boolean {
        if (super.canMove(toCell)) {
            // validate bishop-like step
            if (
                this.cell
                && (Math.abs(this.cell.x - toCell.x) === Math.abs(this.cell.y - toCell.y))
            ) {
                return true;
            }
            // validate rook-like step
            return this.cell?.x === toCell.x || this.cell?.y === toCell.y;
        }
        return false;
    }
}
