import {Color} from "./Color";

export class Player {
    color: Color;
    active: boolean;

    constructor(color: Color) {
        this.color = color;
        this.active = (this.color === Color.WHITE);
    }
}
