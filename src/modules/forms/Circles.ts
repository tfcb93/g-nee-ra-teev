import seedrandom from "seedrandom";
import type { NeePointType } from "../../types";
import { NeeCircle } from "../form/Circle";
import NeeForms from "./Forms";
import NeePoint from "../form/Point";
import { splitBetween } from "../utils/point";
import { randomBetweenNumbers } from "../utils/random";

export default class NeeCircles extends NeeForms{

    constructor(start: NeePointType, end: Array<NeePointType>, quantity: number, generator: seedrandom.PRNG, radius: number = -1) {
        super();
        // for (let i: number = 0; i < quantity; i = i + 1) this.forms = [...this.forms, new NeeCircle(min, max, generator)];
        end.forEach((endPoint) => {
            let newCircles: Array<NeeCircle> = splitBetween(start, endPoint, quantity)
                .map((point: {min: NeePointType, max: NeePointType}) => (new NeeCircle(point.min, point.max, generator, radius > -1 ? radius : randomBetweenNumbers(1, 10, generator), false)));
          this.forms = [...this.forms, ...newCircles];
        });
    }
}