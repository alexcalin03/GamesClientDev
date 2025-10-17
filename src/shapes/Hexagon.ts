import * as PIXI from 'pixi.js';
import { Shape } from '../core/Shape';

export class Hexagon extends Shape {
    private graphics: PIXI.Graphics;
    private radius: number = 35;
    private sides: number = 6;

    constructor(x: number, y: number, color: number) {
        super();
        this.x = x;
        this.y = y;
        this.graphics = new PIXI.Graphics();
        this.draw(color);
        this.addChild(this.graphics);
    }

    private draw(color: number): void {
        this.graphics.regularPoly(0, 0, this.radius, this.sides, 0).fill(color);
    }
    
    public getArea(): number {
        return (3 * Math.sqrt(3) / 2) * this.radius * this.radius;
    }
}