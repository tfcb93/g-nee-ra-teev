import seedrandom from "seedrandom";
import { NeePointType } from "../../types";
import NeePoint from "./Point";

export class NeeSquare extends NeePoint{
    
    width: number;
    height: number;
    fill: boolean;

    constructor(min: NeePointType, max: NeePointType, generator: seedrandom.PRNG, width: number = 10, height: number = 10, fill: boolean = false) {
        super(min, max, generator);
        this.width = width;
        this.height = height;
        this.fill = fill;
    }

    setWidth(newWidth: number) {
        this.width = newWidth;
    }

    setHeight(newHeight: number) {
        this.height = newHeight;
    }

    setMovementVariation(newVariation: number): void {
        this.movement.setVariation(newVariation);
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = "black";
        context.beginPath();
        context.rect(this.x - (this.width/2), this.y - (this.height / 2), this.width, this.height); // x and y are like the center of the square
        this.fill ? context.fill() : context.stroke();
    }
}