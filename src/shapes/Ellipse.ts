import * as PIXI from 'pixi.js';
import { Shape } from '../core/Shape';

export class Ellipse extends Shape {
    private graphics: PIXI.Graphics;
    private halfWidth: number = 40;
    private halfHeight: number = 25;

    constructor(x: number, y: number, color: number) {
        super();
        this.x = x;
        this.y = y;
        this.graphics = new PIXI.Graphics();
        this.draw(color);
        this.addChild(this.graphics);
    }

    private draw(color: number): void {
        this.graphics.ellipse(0, 0, this.halfWidth, this.halfHeight).fill(color);
    }
    
    public getArea(): number {
        return Math.PI * this.halfWidth * this.halfHeight;
    }
}