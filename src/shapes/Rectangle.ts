import * as PIXI from 'pixi.js';
import { Shape } from '../core/Shape';

export class Rectangle extends Shape {
    private graphics: PIXI.Graphics;
    private rectWidth: number = 60;
    private rectHeight: number = 60;

    constructor(x: number, y: number, color: number) {
        super();
        this.x = x;
        this.y = y;
        this.graphics = new PIXI.Graphics();
        this.draw(color);
        this.addChild(this.graphics);
    }

    private draw(color: number): void {
        this.graphics.rect(-this.rectWidth / 2, -this.rectHeight / 2, this.rectWidth, this.rectHeight).fill(color);
    }
    
    public getArea(): number {
        return this.rectWidth * this.rectHeight;
    }
}