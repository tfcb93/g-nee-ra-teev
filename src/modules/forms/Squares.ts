import seedrandom from "seedrandom";
import type { NeePointType } from "../../types";
import { NeeSquare } from "../form/Square";
import NeeForms from "./Forms";
import { splitBetween } from "../utils/point";
import { randomBetweenNumbers } from "../utils/random";

export default class NeeSquares extends NeeForms{

    constructor(start: NeePointType, end: Array<NeePointType>, quantity: number, generator: seedrandom.PRNG, width: number = -1, height: number = -1) {
        super();
        // for (let i: number = 0; i < quantity; i = i + 1) this.forms = [...this.forms, new NeeCircle(min, max, generator)];
        end.forEach((endPoint) => {
            let newCircles: Array<NeeSquare> = splitBetween(start, endPoint, quantity)
                .map((point: {min: NeePointType, max: NeePointType}) => (new NeeSquare(point.min, point.max, generator, width > -1 ? width : randomBetweenNumbers(1, 10, generator), height > -1 ? height : randomBetweenNumbers(1, 10, generator), false)));
          this.forms = [...this.forms, ...newCircles];
        });

    }
}