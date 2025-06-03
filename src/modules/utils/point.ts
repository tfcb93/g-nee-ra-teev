import seedrandom from "seedrandom";
import { NeePointType } from "../../types";
import NeePoint from "../form/Point";

export function splitBetween(pointStart: NeePointType, pointEnd: NeePointType, quantity: number, generator: seedrandom.PRNG): Array<NeePoint> {
    const xDist: number = pointEnd.x - pointStart.x;
    const yDist: number = pointEnd.y - pointStart.y;
    let slicePoints: Array<NeePoint> = [];
    
    for (let i: number = 1; i <= quantity; i = i + 1) {
      slicePoints = [...slicePoints, new NeePoint(
        {x: pointStart.x + ((xDist / quantity) * (i - 1)), y: pointStart.y + ((yDist / quantity) * (i - 1))},
        {x: pointStart.x + ((xDist / quantity) * i), y: pointStart.y + ((yDist / quantity) * i)},
        generator
      )];
    };
  return slicePoints;
}