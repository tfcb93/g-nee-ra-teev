import type { NeeDeltaTimeType } from "../types";

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