import seedrandom from "seedrandom";
import type { DeltaTimeType, OptionsType } from "../src/types";
import { nee_squares } from "../src/modules/options";

export default function nee(
    width: number = 640,
    height: number = 480,
    animated: boolean = true,
    options?: OptionsType,
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
        const nee_choose = nee_squares(nee_canvas, nee_context, nee_random, options);
        if (animated) {
            const nee_animation = () => {
                nee_loop();
                nee_choose(nee_delta.delta);
                requestAnimationFrame(nee_animation);
            }
            nee_animation();
        } else {
            nee_choose(0);
        }
    }

    return {canvas: nee_canvas, context: nee_context};
}