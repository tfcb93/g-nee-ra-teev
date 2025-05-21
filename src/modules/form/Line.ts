import seedrandom from "seedrandom";
import { NeePointType } from "../../types";
import NeePoint from "./Point";


export default class NeeLine {
    start: NeePoint;
    end: NeePoint;

    constructor(min: NeePointType, max: NeePointType, generator: seedrandom.PRNG) {
        this.start = new NeePoint(min, max, generator);
        this.end = new NeePoint(min, max, generator);
    }

    move() {

    }

    draw() {
        
    }
}