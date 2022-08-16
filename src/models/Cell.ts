import {Color} from "./Color";
import {Figure} from "./Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Color;
    figure: Figure | null = null;
    id: number;

    constructor(x: number, y: number, color: Color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.id = Math.random();
    }
}
