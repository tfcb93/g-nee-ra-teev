import seedrandom from "seedrandom";
import { NeeDeltaTimeType, NeePointType } from "../../types";
import NeePoint from "./Point";

export class NeeCircle extends NeePoint {
    
    radius: number;
    fill: boolean;

    constructor(min: NeePointType, max: NeePointType, generator: seedrandom.PRNG, radius: number = 10, fill: boolean = false) {
        super(min, max, generator);
        this.radius = radius;
        this.fill = fill
    }

    setRadius(newRadius: number) {
        this.radius = newRadius;
    }

    // actually everything has a NeePoint type in it hmmmm
    setMovementVariation(newVariation: number): void {
        this.movement.setVariation(newVariation);
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = "black";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.fill ? context.fill() : context.stroke();
    }
}