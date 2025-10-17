import * as PIXI from 'pixi.js';
import { Shape } from './Shape';
import { Config } from '../config';
import { ShapeFactory } from './ShapeFactory';

export class ShapeManager {
    private shapeContainer: PIXI.Container;
    private activeShapes: Shape[] = [];
    private canvasBounds: PIXI.Rectangle;
    private shapeFactory: ShapeFactory;
    public shapesPerSecond: number = Config.shapesPerSecond;
    private timeSinceLastShape: number = 0;

    constructor(shapeContainer: PIXI.Container, canvasBounds: PIXI.Rectangle, shapeFactory: ShapeFactory) {
        this.shapeContainer = shapeContainer;
        this.canvasBounds = canvasBounds;
        this.shapeFactory = shapeFactory;
    }

    public setShapesPerSecond(value: number): void {
        this.shapesPerSecond = Math.max(0, value);
    }

    public update(ticker: PIXI.Ticker): void {
        this.timeSinceLastShape += ticker.deltaMS;
        const generationInterval = 1000 / this.shapesPerSecond;

        if (this.shapesPerSecond > 0 && this.timeSinceLastShape > generationInterval) {
            this.createRandomShape();
            this.timeSinceLastShape = 0;
        }

        for (let i = this.activeShapes.length - 1; i >= 0; i--) {
            const shape = this.activeShapes[i];
            if (shape.destroyed) continue;

            shape.update(Config.gravity);

            if (shape.y > this.canvasBounds.height + 100) {
                this.destroyShape(shape);
            }
        }
    }

    public createShapeAtPosition(x: number, y: number): void {
        const newShape = this.shapeFactory.createIrregularShape(x, y);
        newShape.on('shape:clicked', (shape) => this.destroyShape(shape));
        this.activeShapes.push(newShape);
        this.shapeContainer.addChild(newShape);
    }

    private createRandomShape(): void {
        const startX = Math.random() * this.canvasBounds.width;
        const startY = -50;
        const newShape = this.shapeFactory.createRandomShape(startX, startY);
        newShape.on('shape:clicked', (shape) => this.destroyShape(shape));
        this.activeShapes.push(newShape);
        this.shapeContainer.addChild(newShape);
    }

    private destroyShape(shapeToDestroy: Shape): void {
        const index = this.activeShapes.indexOf(shapeToDestroy);
        if (index > -1) {
            this.activeShapes.splice(index, 1);
            shapeToDestroy.destroy();
        }
    }

    public getShapeCount(): number {
        return this.activeShapes.length;
    }

    public getTotalArea(): number {
        return this.activeShapes.reduce((total, shape) => total + shape.getArea(), 0);
    }
}