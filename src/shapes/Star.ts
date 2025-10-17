import * as PIXI from 'pixi.js';
import { Shape } from '../core/Shape';

export class Star extends Shape {
    private graphics: PIXI.Graphics;

    constructor(x: number, y: number, color: number) {
        super();
        this.x = x;
        this.y = y;
        this.graphics = new PIXI.Graphics();
        this.draw(color);
        this.addChild(this.graphics);
    }

    private draw(color: number): void {
        this.graphics.star(0, 0, 5, 30, 15).fill(color); 
    }
    
    public getArea(): number {
        return 1.12 * 30 * 30; 
    }
}