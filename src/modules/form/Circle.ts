import { NeeDeltaTimeType } from "../../types";
import NeePoint from "./Point";

export class NeeCircle {
    
    center: NeePoint;
    radius: number;
    fill: boolean;

    constructor(center: NeePoint, radius: number = 10, fill: boolean = false) {
        this.center = center;
        this.radius = radius;
        this.fill = fill
    }

    setRadius(newRadius: number) {
        this.radius = newRadius;
    }

    // actually everything has a NeePoint type in it hmmmm
    setMovementVariation(newVariation: number): void {
        this.center.movement.setVariation(newVariation);
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