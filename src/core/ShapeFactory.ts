import { Shape } from './Shape';
import { Triangle } from '../shapes/Triangle';
import { Rectangle } from '../shapes/Rectangle';
import { Pentagon } from '../shapes/Pentagon';
import { Hexagon } from '../shapes/Hexagon';
import { Circle } from '../shapes/Circle';
import { Ellipse } from '../shapes/Ellipse';
import { Star } from '../shapes/Star';
import { IrregularShape } from '../shapes/IrregularShape';
import { generateIrregularPolygonPoints } from './utils/generateIrregularPoints';

type ShapeConstructor = new (x: number, y: number, color: number) => Shape;

export class ShapeFactory {
    private readonly availableShapes: ShapeConstructor[] = [
        Triangle, Rectangle, Pentagon, Hexagon, Circle, Ellipse, Star,
    ];

    public createRandomShape(x: number, y: number): Shape {
        const ShapeClass = this.availableShapes[Math.floor(Math.random() * this.availableShapes.length)];
        const randomColor = Math.random() * 0xFFFFFF;
        return new ShapeClass(x, y, randomColor);
    }

    public createIrregularShape(x: number, y: number): Shape {
        const randomColor = Math.random() * 0xFFFFFF;
        const sides = Math.floor(Math.random() * 6) + 5; // Random 5 to 10 sides
        const points = generateIrregularPolygonPoints(sides, 25, 45);
        return new IrregularShape(x, y, randomColor, points);
    }

}