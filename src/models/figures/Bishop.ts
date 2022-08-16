import {Figure} from "../Figure";
import {Cell} from "../Cell";
import {Color} from "../Color";
import blackLogo from '../../assets/black_bishop.png'
import whiteLogo from '../../assets/white_bishop.png'

export class Bishop extends Figure {
    constructor(cell: Cell, color: Color) {
        super(cell, color);
        this.logo = color === Color.BLACK ? blackLogo : whiteLogo;
    }
}
