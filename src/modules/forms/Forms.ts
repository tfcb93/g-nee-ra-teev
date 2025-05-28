import { NeeDeltaTimeType } from "../../types";
import { NeeCircle } from "../form/Circle";
import NeeLine from "../form/Line";
import NeePoint from "../form/Point";
import NeeSquare from "../form/Square";

type NeeFormsArrayType = Array<NeePoint | NeeLine | NeeSquare | NeeCircle>;
type NeeFormsType = NeePoint | NeeLine | NeeSquare | NeeCircle;

export default class NeeForms {

    forms: NeeFormsArrayType = [];

    constructor() {

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