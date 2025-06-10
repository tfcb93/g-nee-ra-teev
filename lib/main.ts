import seedrandom from "seedrandom";
import type { NeeDeltaTimeType, NeePointType } from "../src/types";
import NeePoints from "../src/modules/forms/Points";
import NeeForms from "../src/modules/forms/Forms";
import NeeCircles from "../src/modules/forms/Circles";
import NeeSquares from "../src/modules/forms/Squares";

export default class Nee {

    width: number = 640;
    height: number = 480;

    canvas: HTMLCanvasElement | null = null;
    context: CanvasRenderingContext2D | null = null;

    seed: seedrandom.PRNG = seedrandom("10");

    start: NeePointType = {x: 0, y: 0};
    ends: Array<NeePointType> = [];

    delta: NeeDeltaTimeType = {previousTime: Date.now(), delta: 0};
    animation: FrameRequestCallback = () => {};

    form: NeeForms | null = null;


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

// Generation related methods
    // are those necessary actually?
    points(quantity: number) {
        this.form = new NeePoints(this.start, this.ends, quantity, this.seed);
    }
    circles(quantity: number, radius: number = 10) {
        this.form = new NeeCircles(this.start, this.ends, quantity, this.seed, radius);
    }
    squares(quantity: number, width: number = 10, height: number = 10) {
        this.form = new NeeSquares(this.start, this.ends, quantity, this.seed, width, height);
    }
    startPoint(start: NeePointType) {
        this.start = start;
    }
    endPoints(ends: Array<NeePointType>) {
        this.ends = ends;
    }

// Movement related methods

    changeVariationInterval(min: number, max: number) {
        if (!this.form) return;
        this.form.setMovement(min, max, this.seed);
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

    draw() {
        if (!this.context) return;
        if (!this.form) return;
        this.form.draw(this.context!);
    }

    animate() {
        if (!this.context) return;

        this.animation = () => {
            this.context?.clearRect(0, 0, this.canvas!.width, this.canvas!.height)
            this.loop();

            if (!this.form) return;

            this.form.move(this.delta);
            this.form.draw(this.context!);

            requestAnimationFrame(this.animation);
        }
        this.animation(0); // For now, I will set it this way. Will check later the problems with that.
    }


}