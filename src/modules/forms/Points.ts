import seedrandom from 'seedrandom';
import type { NeePointType } from '../../types';
import NeeForms from './Forms';
import { pointBetween } from '../utils/point';

export default class NeePoints extends NeeForms{

	constructor(start: NeePointType, end: Array<NeePointType>, quantity: number, generator: seedrandom.PRNG) {
    super();
    // for (let i: number = 0; i < quantity; i = i + 1) this.forms = [...this.forms, new NeePoint(min, max, generator)];

    end.forEach((endPoint) => {
      this.forms = [...this.forms, ...(pointBetween(start, endPoint, quantity, generator))];
    });
	}

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