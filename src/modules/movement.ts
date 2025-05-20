import { MovementAxis } from "../enum";
import type { NeeDeltaTimeType, NeePointType } from "../types";

// export function sinPointMovement(point: NeePointType, delta: number, variation: number, movementAxis: MovementAxis): NeePointType {
//     switch(movementAxis) {
//       case MovementAxis.X:
//         return {x: point.x + (Math.sin(delta) * variation), y: point.y};
//       case MovementAxis.Y:
//         return {x: point.x , y: point.y + (Math.sin(delta) * variation)};
//       case MovementAxis.BOTH:
//         return {x: point.x + (Math.sin(delta) * variation), y: point.y + (Math.sin(delta) * variation)};
//     }
//   }
  
// export function cosPointMovement(point: NeePointType, delta: number, variation: number, movementAxis: MovementAxis): NeePointType {
//     switch(movementAxis) {
//       case MovementAxis.X:
//         return {x: point.x + (Math.cos(delta) * variation), y: point.y};
//       case MovementAxis.Y:
//         return {x: point.x , y: point.y + (Math.cos(delta) * variation)};
//       case MovementAxis.BOTH:
//         return {x: point.x + (Math.cos(delta) * variation), y: point.y + (Math.cos(delta) * variation)};
//     }
//   }

export default class NeeMovement {
  
  mathFunction: Function = Math.sin;
  variation: number = 0;

  constructor(variation: number = 0) {
    this.variation = variation;
  }

  defineFunction(newFunction: Function): void {
    this.mathFunction = newFunction;
  }

  move(value: number, delta: NeeDeltaTimeType): number {
    return value + (this.mathFunction(delta.delta) * this.variation);
  }
}