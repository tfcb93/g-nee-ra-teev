import seedrandom from 'seedrandom';
import type { NeeDeltaTimeType, NeePointType } from '../../types';
import NeePoint from '../form/Point';
import NeeForms from './Forms';

export default class NeePoints extends NeeForms{
	points: Array<NeePoint> = [];

	constructor(min: NeePointType, max: NeePointType, quantity: number, generator: seedrandom.PRNG) {
    super();
    for (let i: number = 0; i < quantity; i = i + 1) this.points = [...this.points, new NeePoint(min, max, generator)];
	}

  move(delta: NeeDeltaTimeType): void {
    this.points.forEach((point, index) => {
      point.move(delta);
    });
  }

  draw(context: CanvasRenderingContext2D): void {
    context.save();
    this.points.forEach((point, index) => {
      point.draw(context);
    });
    context.restore();
  }

}

// basically "generate more points between two points"
export function splitBetween(pointStart: NeePointType, pointEnd: NeePointType, quantity: number): Array<NeePointType> {
    const xDist: number = pointEnd.x - pointStart.x;
    const yDist: number = pointEnd.y - pointStart.y;
    let slicePoints: Array<NeePointType> = [];
    
    for (let i: number = 1; i <= quantity; i = i + 1) {
      slicePoints = [...slicePoints, {x: pointStart.x + ((xDist / quantity) * i), y: pointStart.y + ((yDist / quantity) * i)}];
    }
    return slicePoints;
  }

// I do have to adapt this to move each point (or circle, or square, or whatever) individually

// export function choosePointMovement(point: NeePointType, delta: number, variation: number, generator: seedrandom.PRNG): NeePointType {
//     const randomValue = generator();
//     const secondRandomValue = generator();
//     if(randomValue < 0.5) {
//       if(secondRandomValue < 0.3) {
//         return sinPointMovement(point, delta, variation, MovementAxis.X);
//       } else if(secondRandomValue >= 0.3 && secondRandomValue < 0.6){
//         return sinPointMovement(point, delta, variation, MovementAxis.Y);
//       } else {
//         return sinPointMovement(point, delta, variation, MovementAxis.BOTH);
//       }
//     } else {
//       if(secondRandomValue < 0.3) {
//         return cosPointMovement(point, delta, variation, MovementAxis.X);
//       } else if(secondRandomValue >= 0.3 && secondRandomValue < 0.6){
//         return cosPointMovement(point, delta, variation, MovementAxis.Y);
//       } else {
//         return cosPointMovement(point, delta, variation, MovementAxis.BOTH);
//       }
//     }
//   }