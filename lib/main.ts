import seedrandom from "seedrandom";
import type { DeltaTimeType, LimitsType, PointType, ScreenOptions } from "../src/types";
import { choosePointMovement, createPoint, createPointHalfWay, createVariousPoints, distortPointByPercentage, splitBetween } from "../src/modules/points";
import { randomBetweenNumbers } from "../src/modules/random";
import { drawPoint } from "../src/modules/drawing";

const standardScreenSize: ScreenOptions = {
    min: {
        x: 0,
        y: 0,
    },
    max: {
        x: 640,
        y: 480
    }
}

export default function nee(
    width: number = 640,
    height: number = 480,
    screen: ScreenOptions = standardScreenSize,
    animated: boolean = true,
): {canvas: HTMLCanvasElement, context: CanvasRenderingContext2D | null} {

    // canvas initial operations
    const nee_canvas: HTMLCanvasElement = document.createElement('canvas');
    const nee_context: CanvasRenderingContext2D | null = nee_canvas.getContext("2d");

    nee_canvas.width = width;
    nee_canvas.height = height;

    // create pseudorandom seed
    const nee_random: seedrandom.PRNG = seedrandom();

    // create delta time
    let nee_delta: DeltaTimeType = {previousTime: Date.now(), delta: 0};
    const nee_loop = () => {
        const currentTime = Date.now();
        const elapsed = (currentTime - nee_delta.previousTime) / 1000;
        nee_delta.previousTime = currentTime;
        nee_delta.delta = nee_delta.delta + elapsed;
    }

    
    if (nee_context) {
        const nee_choose = nee_squares(nee_context, nee_random, screen, {min: 10, max: 20});
        if (animated) {
            const nee_animation = () => {
                nee_loop();
                nee_choose(nee_delta.delta);
                requestAnimationFrame(nee_animation);
            }
            nee_animation();
        }
    }


    return {canvas: nee_canvas, context: nee_context};
}

function nee_squares(nee_context: CanvasRenderingContext2D, nee_generator: seedrandom.PRNG, screen: ScreenOptions, limits: LimitsType): (delta: number) => void {
    // initialize
    const initialPoint: PointType = createPoint(screen.min, screen.max, nee_generator);
    const finalPoints: Array<PointType> = createVariousPoints(screen.min, screen.max, nee_generator, randomBetweenNumbers(limits.min, limits.max, nee_generator));
    let inBetweenPoints: Array<Array<PointType>> = finalPoints.map((point: PointType) => {
        return splitBetween(initialPoint, point, randomBetweenNumbers(10, 30, nee_generator)).map((inBetweenPoint: PointType, index: number, arr: Array<PointType>) => {
          const newPoint = distortPointByPercentage(createPointHalfWay(index == 0 ? initialPoint : arr[index - 1], inBetweenPoint), 10, nee_generator);
          return newPoint;
        });
      });


      return (delta: number) => {
        nee_context.clearRect(0, 0, screen.max.x, screen.max.y);
        inBetweenPoints = inBetweenPoints.map((points: Array<PointType>) => {
            const colorInterval: number = 1.0/points.length;
            const pointsMultiplyer = nee_generator();
            return points.map((point: PointType, index: number) => {
                const gradient: number = true ? 1.0 - (colorInterval * index) : (colorInterval * index); // in the future, change it to be a parameter
                drawPoint(nee_context, point.x, point.y, 40, 40, `rgba(0,0,0,${gradient})`);
                return choosePointMovement(point, delta, pointsMultiplyer, nee_generator);
            });
      });
    }
}