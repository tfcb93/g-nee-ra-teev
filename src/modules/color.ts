import { ColorDirection } from "../enum";
import { ColorsOptions, PointType } from "../types";
import { getScale, transparentize } from "color2k";

export function nee_colors(points: Array<PointType>, options?: ColorsOptions): Array<PointType> {
    if (options == null || options == undefined) return points;
    if(typeof options.colors == 'string') {
        return points.map((point) => ({...point, color: options.colors as string}));
    } else if (options.colors.length == 1) {
        return points.map((point) => ({...point, color: options.colors[0]}));
    } else if(options.colors.length > 1){
        const colorsArray: Array<string> = options.direction !== undefined && options.direction == ColorDirection.TOSTART ? options.colors.toReversed() : options.colors;
        console.log(options.direction == ColorDirection.TOSTART, colorsArray);
        const colorScale = getScale(...colorsArray);
        if (options.disolve) {
            return points.map((point, index) => ({...point, color: transparentize(colorScale(index/points.length), index/points.length)}));
        } else {
            return points.map((point, index) => ({...point, color: colorScale(index/points.length)}));
        }
    }
    return points;
}