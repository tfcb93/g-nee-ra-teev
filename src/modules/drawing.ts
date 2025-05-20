import type { NeePointType } from "../types";

export function drawPoint(ctx: CanvasRenderingContext2D, x: number, y:number, w: number, h: number, color: string) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.rect(x - w/2, y - h/2, w, h); // centrilized rect
    ctx.stroke();
    ctx.restore();
  }
  
export function drawLine (ctx: CanvasRenderingContext2D, pointStart: NeePointType, pointEnd: NeePointType, color: string) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(pointStart.x, pointStart.y);
    ctx.lineTo(pointEnd.x, pointEnd.y);
    ctx.stroke();
    ctx.restore();
}