import seedrandom from "seedrandom";
import type { NeeDeltaTimeType, LimitsType, OptionsType, NeePointType, ScreenOptions } from "../src/types";
import NeePoints, { splitBetween } from "../src/modules/Points";
import { randomBetweenNumbers } from "../src/modules/random";
import { drawPoint } from "../src/modules/drawing";

export default class Nee {

    width: number = 640;
    height: number = 480;

    canvas: HTMLCanvasElement | null = null;
    context: CanvasRenderingContext2D | null = null;

    seed: seedrandom.PRNG = seedrandom("10");

    delta: NeeDeltaTimeType = {previousTime: Date.now(), delta: 0};
    animation: FrameRequestCallback = () => {};

    form = new NeePoints({x: 100, y: 100}, {x: 250, y: 250}, 10, this.seed);


    constructor(width?: number, height?: number) {
        if (!this.canvas) {
            this.canvas = document.createElement("canvas");
            if (this.canvas) this.context = this.canvas.getContext("2d");
        }

        if (width) this.setWidth(width);
        else this.canvas.width = this.width;
        
        if (height) this.setWidth(height);
        else this.canvas.height = this.height;
    }

// Canvas related methods    
    setWidth(width: number): void {
        if (width) this.width = width;
        if (this.canvas) this.canvas.width = this.width;
    }

    setHeight(height: number): void {
        if (height) this.height = height;
        if (this.canvas) this.canvas.height = this.height;
    }

    setSize(width: number, height: number): void {
        this.setWidth(width);
        this.setHeight(height);
    }
    

// Loop related methods
    loop() {
        const currentTime = Date.now();
        const elapsed = (currentTime - this.delta.previousTime) / 1000;
        this.delta.previousTime = currentTime;
        this.delta.delta = this.delta.delta + elapsed;
    }
// Presentation related methods
    show(element?: HTMLElement | null) {
        if (!this.canvas) return; 
        if (!element) {
            document.body.appendChild(this.canvas);
            return;
        }
        element.appendChild(this.canvas);
    }

    animate() {
        if (!this.context) return;

        this.animation = () => {
            this.context?.clearRect(0, 0, this.canvas!.width, this.canvas!.height)
            this.loop();
            // animate things here

            this.form.move(this.delta);
            this.form.draw(this.context!);

            requestAnimationFrame(this.animation);
        }
        this.animation(0); // For now, I will set it this way. Will check later the problems with that.
    }


}

// export default function nee(
//     animated: boolean = true,
//     options?: OptionsType,
// ): {canvas: HTMLCanvasElement, context: CanvasRenderingContext2D | null} {   
//     if (nee_context) {
//         const nee_choose = nee_squares(nee_canvas, nee_context, nee_random, options);
//         if (animated) {
//             const nee_animation = () => {
//                 nee_loop();
//                 nee_choose(nee_delta.delta);
//                 requestAnimationFrame(nee_animation);
//             }
//             nee_animation();
//         } else {
//             nee_choose(0);
//         }
//     }
// }

// function nee_squares(
//     nee_canvas: HTMLCanvasElement,
//     nee_context: CanvasRenderingContext2D,
//     nee_generator: seedrandom.PRNG,
//     options?: OptionsType,
// ): (delta: number) => void {
//     const screen: ScreenOptions = options && options.screenArea ? options.screenArea : {min: {x:0, y:0}, max: {x: nee_canvas.width, y: nee_canvas.height}};
//     const limits: LimitsType = options && options.intervalLimits ? options.intervalLimits : {min: 10, max: 20};
//     // initialize
//     const initialPoint: NeePointType = options && options.initialPoint ? options.initialPoint : createPoint(screen.min, screen.max, nee_generator);
//     const finalPoints: Array<NeePointType> = options &&  options.endPoints ? options.endPoints : createVariousPoints(screen.min, screen.max, nee_generator, randomBetweenNumbers(1, 20, nee_generator));
//     let inBetweenPoints: Array<Array<NeePointType>> = finalPoints.map((point: NeePointType) => {
//         return splitBetween(initialPoint, point, randomBetweenNumbers(limits.min, limits.max, nee_generator)).map((inBetweenPoint: NeePointType, index: number, arr: Array<NeePointType>) => {
//           const newPoint = distortPointByPercentage(createPointHalfWay(index == 0 ? initialPoint : arr[index - 1], inBetweenPoint), 10, nee_generator);
//           return newPoint;
//         });
//       });


//       return (delta: number) => {
//         nee_context.clearRect(0, 0, nee_canvas.width, nee_canvas.height);
//         inBetweenPoints = inBetweenPoints.map((points: Array<NeePointType>) => {
//             const colorInterval: number = 1.0/points.length;
//             const pointsMultiplyer = nee_generator();
//             return points.map((point: NeePointType, index: number) => {
//                 const gradient: number = true ? 1.0 - (colorInterval * index) : (colorInterval * index); // in the future, change it to be a parameter
//                 drawPoint(nee_context, point.x, point.y, 40, 40, `rgba(0,0,0,${gradient})`);
//                 return choosePointMovement(point, delta, pointsMultiplyer, nee_generator);
//             });
//       });
//     }
// }