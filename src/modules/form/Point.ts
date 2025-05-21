import seedrandom from "seedrandom";
import { NeeDeltaTimeType, NeePointType } from "../../types";
import { randomBetweenNumbers } from "../utils/random";
import NeeMovement from "../Movement";
import { MovementAxis } from "../../enum";

export default class NeePoint {

    x: number = 0;
    y: number = 0;

    movement = new NeeMovement(1);
    axis: MovementAxis = 1;

    constructor(min: NeePointType, max: NeePointType, generator: seedrandom.PRNG) {
        this.x = randomBetweenNumbers(min.x, max.x, generator);
        this.y = randomBetweenNumbers(min.y, max.y, generator);
    }

    // percentage needs to be a number between 0 to 100
    randMoveByPercentage(percentage: number, generator: seedrandom.PRNG) {
        this.x += this.x * (randomBetweenNumbers(percentage * -1, percentage, generator) / 100);
        this.y += this.y * (randomBetweenNumbers(percentage * -1, percentage, generator) / 100);
    }

    setAxis(newAxis: MovementAxis) {
        this.axis = newAxis;
    }

    setMovement(newMovement: NeeMovement) {
        this.movement = newMovement;
    }

    move(delta: NeeDeltaTimeType): void {
        switch(this.axis) {
            case MovementAxis.X:
                this.x = this.movement.move(this.x, delta);
                return;
            case MovementAxis.Y:
                this.y = this.movement.move(this.y, delta);
                return;
            case MovementAxis.BOTH:
                this.x = this.movement.move(this.x, delta);
                this.y = this.movement.move(this.y, delta);
                return;
            default:
                return
        }
    }

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = "black";
        context.beginPath();
        context.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        context.fill();

        // console.log(this.x, this.y);
    }
}