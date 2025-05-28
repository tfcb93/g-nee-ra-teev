import seedrandom from "seedrandom";
import type { NeePointType } from "../../types";
import { NeeCircle } from "../form/Circle";
import NeeForms from "./Forms";

export default class NeeCircles extends NeeForms{

    constructor(min: NeePointType, max: NeePointType, quantity: number, generator: seedrandom.PRNG) {
        super();
        for (let i: number = 0; i < quantity; i = i + 1) this.forms = [...this.forms, new NeeCircle(min, max, generator)];
    }
}