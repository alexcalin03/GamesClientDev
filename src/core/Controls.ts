import { Config } from '../config';
import { ShapeManager } from './ShapeManager';
import { UIManager } from './UIManager';

export class Controls {
    constructor(shapeManager: ShapeManager, uiManager: UIManager) {
        document.getElementById('shapes-minus-btn')!.addEventListener('click', () => {
            shapeManager.setShapesPerSecond(shapeManager.shapesPerSecond - 1);
            uiManager.updateControls(shapeManager.shapesPerSecond, Config.gravity);
        });
        document.getElementById('shapes-plus-btn')!.addEventListener('click', () => {
            shapeManager.setShapesPerSecond(shapeManager.shapesPerSecond + 1);
            uiManager.updateControls(shapeManager.shapesPerSecond, Config.gravity);
        });
        document.getElementById('gravity-minus-btn')!.addEventListener('click', () => {
            Config.gravity = Math.max(0.1, Config.gravity - 0.1);
            uiManager.updateControls(shapeManager.shapesPerSecond, Config.gravity);
        });
        document.getElementById('gravity-plus-btn')!.addEventListener('click', () => {
            Config.gravity += 0.1;
            uiManager.updateControls(shapeManager.shapesPerSecond, Config.gravity);
        });
        // Initial update
        uiManager.updateControls(shapeManager.shapesPerSecond, Config.gravity);
    }
}