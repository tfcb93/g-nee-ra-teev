import seedrandom from "seedrandom";
import type { LimitsType, OptionsType, PointType, ScreenOptions } from "../../src/types";
import { choosePointMovement, createPoint, createPointHalfWay, createVariousPoints, distortPointByPercentage, splitBetween } from "../../src/modules/points";
import { randomBetweenNumbers } from "../../src/modules/random";
import { drawRect } from "../../src/modules/drawing";
import { nee_colors } from "./color";

export function nee_squares(
    nee_canvas: HTMLCanvasElement,
    nee_context: CanvasRenderingContext2D,
    nee_generator: seedrandom.PRNG,
    options?: OptionsType,
): (delta: number) => void {
    const screen: ScreenOptions = options && options.screenArea ? options.screenArea : {min: {x:0, y:0}, max: {x: nee_canvas.width, y: nee_canvas.height}};
    const limits: LimitsType = options && options.intervalLimits ? options.intervalLimits : {min: 10, max: 20};
    // initialize
    const initialPoint: PointType = options && options.initialPoint ? options.initialPoint : createPoint(screen.min, screen.max, nee_generator);
    const finalPoints: Array<PointType> = options &&  options.endPoints ? options.endPoints : createVariousPoints(screen.min, screen.max, nee_generator, randomBetweenNumbers(1, 20, nee_generator));
    let inBetweenPoints: Array<Array<PointType>> = finalPoints.map((point: PointType) => {
        return splitBetween(initialPoint, point, randomBetweenNumbers(limits.min, limits.max, nee_generator)).map((inBetweenPoint: PointType, index: number, arr: Array<PointType>) => {
          const newPoint = distortPointByPercentage(createPointHalfWay(index == 0 ? initialPoint : arr[index - 1], inBetweenPoint), 10, nee_generator);
          return newPoint;
        });
      }).map((points) => options && options.color ? nee_colors(points, options?.color) : points);

      return (delta: number) => {
        nee_context.clearRect(0, 0, nee_canvas.width, nee_canvas.height);
        inBetweenPoints = inBetweenPoints.map((points: Array<PointType>) => {
            const pointsMultiplyer = nee_generator();
            return points.map((point: PointType, index: number) => {
                drawRect(nee_context, point.x, point.y, 40, 40, point.color ? point.color : '#000000');
                return choosePointMovement(point, delta, pointsMultiplyer, nee_generator);
            });
      });
    }
}