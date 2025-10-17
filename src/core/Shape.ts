import * as PIXI from 'pixi.js';

export abstract class Shape extends PIXI.Container {
    public velocity: PIXI.Point;

    constructor() {
        super();
        this.velocity = new PIXI.Point(0, 0);
        this.interactive = true;
        this.cursor = 'pointer';
        this.on('pointerdown', (event) => {
            event.stopPropagation();
            this.emit('shape:clicked', this);
        });
    }
    
    public abstract getArea(): number;

    public update(gravity: number): void {
        this.velocity.y += gravity;
        this.y += this.velocity.y;
    }
}