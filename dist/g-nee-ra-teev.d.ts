import { ScreenOptions } from '../src/types';

declare function nee(width?: number, height?: number, screen?: ScreenOptions, animated?: boolean): {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;
};
export default nee;

export { }
