import * as PIXI from 'pixi.js';
import { Shape } from '../core/Shape';

export class Circle extends Shape {
    private graphics: PIXI.Graphics;
    private radius: number = 30;

    constructor(x: number, y: number, color: number) {
        super();
        this.x = x;
        this.y = y;
        this.graphics = new PIXI.Graphics();
        this.draw(color);
        this.addChild(this.graphics);
    }

    private draw(color: number): void {
        this.graphics.circle(0, 0, this.radius).fill(color);
    }
    
    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}