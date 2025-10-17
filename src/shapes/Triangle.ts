import * as PIXI from 'pixi.js';
import { Shape } from '../core/Shape';

export class Triangle extends Shape {
    private graphics: PIXI.Graphics;
    private radius: number = 35;
    private sides: number = 3;

    constructor(x: number, y: number, color: number) {
        super();
        this.x = x;
        this.y = y;

        this.graphics = new PIXI.Graphics();
        this.draw(color);

        this.addChild(this.graphics);
    }

    private draw(color: number): void {
        this.graphics.regularPoly(0, 0, this.radius, this.sides, -Math.PI / 2).fill(color);
    }
    
    public getArea(): number {
        // Formula for the area of a regular polygon
        return 0.5 * this.sides * this.radius * this.radius * Math.sin((2 * Math.PI) / this.sides);
    }
}