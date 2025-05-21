import seedrandom from "seedrandom";
import { NeePointType } from "../../types";
import NeePoint from "./Point";

export default class NeeSquare {

    center: NeePoint;

    constructor(min: NeePointType, max: NeePointType, generator: seedrandom.PRNG) {
        this.center = new NeePoint(min, max, generator)
    }

    move() {

    }

    draw() {
        
    }
}