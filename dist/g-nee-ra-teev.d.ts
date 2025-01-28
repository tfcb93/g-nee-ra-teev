import { OptionsType } from '../src/types';

declare function nee(width?: number, height?: number, animated?: boolean, options?: OptionsType): {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;
};
export default nee;

export { }
