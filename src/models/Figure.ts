import logo from '../assets/black_king.png';
import {Cell} from "./Cell";
import {Color} from "./Color";

export class Figure {
    cell: Cell|null;
    color: Color;
    logo: typeof logo | null;

    constructor(cell: Cell, color:Color) {
        this.cell = cell;
        this.color = color;
        this.logo = null;
    }
}
