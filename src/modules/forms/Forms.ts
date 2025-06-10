import seedrandom from "seedrandom";
import { NeeDeltaTimeType } from "../../types";
import { NeeCircle } from "../form/Circle";
import NeePoint from "../form/Point";
import { randomBetweenNumbers } from "../utils/random";
import { NeeSquare } from "../form/Square";
// import NeeLine from "../form/Line";
// import NeeSquare from "../form/Square";

type NeeFormsArrayType = Array<NeePoint | NeeCircle | NeeSquare > //NeePoint>| NeeSquare | NeeLine>;
type NeeFormsType = NeePoint | NeeCircle | NeeSquare //| NeeSquare | NeeLine;

export default class NeeForms {

    forms: NeeFormsArrayType = [];

    constructor() {

    }

    setMovement(min: number, max: number, generator: seedrandom.PRNG): void {
        this.forms.forEach((form: NeeFormsType) => {
            form.setMovementVariation(randomBetweenNumbers(min, max, generator, {multiplier: randomBetweenNumbers(0.01, 0.4, generator, {trunc: false})}));
        });
    }

    draw(context: CanvasRenderingContext2D) {
        context.save();
        this.forms.forEach((form: NeeFormsType) => {
          form.draw(context);
        });
        context.restore();
    }

    move(delta: NeeDeltaTimeType) {
        this.forms.forEach((form: NeeFormsType) => {
            form.move(delta);
        });
    }

}