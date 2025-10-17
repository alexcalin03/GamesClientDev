import * as PIXI from 'pixi.js';
import { Shape } from '../core/Shape';
import { calculatePolygonArea } from '../core/utils/getPolygonArea';

export class IrregularShape extends Shape {
    private graphics: PIXI.Graphics;
    private points: PIXI.Point[];

    constructor(x: number, y: number, color: number, points: PIXI.Point[]) {
        super();
        this.x = x;
        this.y = y;
        this.points = points;
        this.graphics = new PIXI.Graphics();
        this.draw(color);
        this.addChild(this.graphics);
    }

    private draw(color: number): void {
        this.graphics.poly(this.points).fill(color);
    }

    public getArea(): number {
        return calculatePolygonArea(this.points);
    }
       
}
