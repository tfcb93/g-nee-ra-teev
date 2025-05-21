import seedrandom from "seedrandom";
import { NeeDeltaTimeType, NeePointType } from "../../types";
import { NeeCircle } from "../form/Circle";
import NeeForms from "./Forms";

export default class NeeCircles extends NeeForms{

    circles: Array<NeeCircle> = [];

    constructor(min: NeePointType, max: NeePointType, quantity: number, generator: seedrandom.PRNG) {
        super();
        for (let i: number = 0; i < quantity; i = i + 1) this.circles = [...this.circles, new NeeCircle(min, max, generator)];
    }

      move(delta: NeeDeltaTimeType): void {
        this.circles.forEach((circle, index) => {
          circle.move(delta);
        });
      }
    
      draw(context: CanvasRenderingContext2D): void {
        context.save();
        this.circles.forEach((circle, index) => {
          circle.draw(context);
        });
        context.restore();
      }
}