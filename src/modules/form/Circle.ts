import seedrandom from "seedrandom";
import { NeeDeltaTimeType, NeePointType } from "../../types";
import NeePoint from "./Point";

export class NeeCircle {
    
    center: NeePoint;
    radius: number = 10;
    fill: boolean = false;

    constructor(min: NeePointType, max: NeePointType, generator: seedrandom.PRNG) {
        this.center = new NeePoint(min, max, generator);
    }

    setRadius(newRadius: number) {
        this.radius = newRadius;
    }

    move(delta: NeeDeltaTimeType) {
        this.center.move(delta);
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = "black";
        context.beginPath();
        context.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        this.fill ? context.fill() : context.stroke();
    }
}