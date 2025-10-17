import * as PIXI from 'pixi.js';

export function generateIrregularPolygonPoints(sides: number, minRadius: number, maxRadius: number): PIXI.Point[] {
    const points: PIXI.Point[] = [];
    for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * 2 * Math.PI;
        // The radius for each point is random, creating the irregular shape
        const radius = minRadius + Math.random() * (maxRadius - minRadius);
        const px = radius * Math.cos(angle);
        const py = radius * Math.sin(angle);
        points.push(new PIXI.Point(px, py));
    }
    return points;
}