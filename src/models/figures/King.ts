import {Figure} from "../Figure";
import {Cell} from "../Cell";
import {Color} from "../Color";
import blackLogo from '../../assets/black_king.png'
import whiteLogo from '../../assets/white_king.png'

export class King extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
    }
}
