import {Figure} from "../Figure";
import {Cell} from "../Cell";
import {Color} from "../Color";
import blackLogo from '../../assets/black_queen.png';
import whiteLogo from '../../assets/white_queen.png';

export class Queen extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
    }
}
