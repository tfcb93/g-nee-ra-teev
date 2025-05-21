import seedrandom from "seedrandom";
import { NeePointType } from "../types";
import NeePoint from "./form/Point";


export default class NeeHalfwayPoint extends NeePoint {

    constructor(start: NeePointType, end: NeePointType, generator: seedrandom.PRNG) {
        super(start, end, generator); // I don't like to do this, but I let it this way for now
        this.x = (start.x + end.x) / 2;
        this.y = (start.y + end.y) / 2;
    }

}