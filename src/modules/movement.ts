import { MovementAxis } from "../enum";
import type { PointType } from "../types";

export function sinPointMovement(point: PointType, delta: number, variation: number, movementAxis: MovementAxis): PointType {
    switch(movementAxis) {
      case MovementAxis.X:
        return {x: point.x + (Math.sin(delta) * variation), y: point.y};
      case MovementAxis.Y:
        return {x: point.x , y: point.y + (Math.sin(delta) * variation)};
      case MovementAxis.BOTH:
        return {x: point.x + (Math.sin(delta) * variation), y: point.y + (Math.sin(delta) * variation)};
    }
  }
  
export function cosPointMovement(point: PointType, delta: number, variation: number, movementAxis: MovementAxis): PointType {
    switch(movementAxis) {
      case MovementAxis.X:
        return {x: point.x + (Math.cos(delta) * variation), y: point.y};
      case MovementAxis.Y:
        return {x: point.x , y: point.y + (Math.cos(delta) * variation)};
      case MovementAxis.BOTH:
        return {x: point.x + (Math.cos(delta) * variation), y: point.y + (Math.cos(delta) * variation)};
    }
  }