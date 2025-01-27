import seedrandom from 'seedrandom';
import { randomBetweenNumbers } from "./random";
import type { PointType } from '../types';
import { cosPointMovement, sinPointMovement } from './movement';
import { MovementAxis } from '../enum';

export function createPoint(min: PointType, max: PointType, generator: seedrandom.PRNG): PointType {
  return {x: randomBetweenNumbers(min.x, max.x, generator), y: randomBetweenNumbers(min.y, max.y, generator)};
}

export function createPointHalfWay(pointStart: PointType, pointEnd: PointType): PointType {
  return {x: (pointStart.x + pointEnd.x) / 2, y: (pointStart.y + pointEnd.y) / 2};
}

export function createVariousPoints (min: PointType, max: PointType, generator: seedrandom.PRNG, quantity: number): Array<PointType> {
  let arrayOfPoints: Array<PointType> = [];
  for (let i: number = 0; i < quantity; i = i + 1) {
    arrayOfPoints = [...arrayOfPoints, createPoint(min, max, generator)];
  }
  return arrayOfPoints;
}

// percentage will work like a number from 0 to 100.
export function distortPointByPercentage(point: PointType, percentage: number, generator: seedrandom.PRNG): PointType {
  const sumX: number = point.x * (randomBetweenNumbers(percentage * -1, percentage, generator) / 100);
  const sumY: number = point.y * (randomBetweenNumbers(percentage * -1, percentage, generator) / 100);
  return {x: point.x + sumX, y: point.y + sumY};
}

export function splitBetween(pointStart: PointType, pointEnd: PointType, quantity: number): Array<PointType> {
    const xDist: number = pointEnd.x - pointStart.x;
    const yDist: number = pointEnd.y - pointStart.y;
    let slicePoints: Array<PointType> = [];
    
    for (let i: number = 1; i <= quantity; i = i + 1) {
      slicePoints = [...slicePoints, {x: pointStart.x + ((xDist / quantity) * i), y: pointStart.y + ((yDist / quantity) * i)}];
    }
    return slicePoints;
  }

export function choosePointMovement(point: PointType, delta: number, variation: number, generator: seedrandom.PRNG): PointType {
    const randomValue = generator();
    const secondRandomValue = generator();
    if(randomValue < 0.5) {
      if(secondRandomValue < 0.3) {
        return sinPointMovement(point, delta, variation, MovementAxis.X);
      } else if(secondRandomValue >= 0.3 && secondRandomValue < 0.6){
        return sinPointMovement(point, delta, variation, MovementAxis.Y);
      } else {
        return sinPointMovement(point, delta, variation, MovementAxis.BOTH);
      }
    } else {
      if(secondRandomValue < 0.3) {
        return cosPointMovement(point, delta, variation, MovementAxis.X);
      } else if(secondRandomValue >= 0.3 && secondRandomValue < 0.6){
        return cosPointMovement(point, delta, variation, MovementAxis.Y);
      } else {
        return cosPointMovement(point, delta, variation, MovementAxis.BOTH);
      }
    }
  }