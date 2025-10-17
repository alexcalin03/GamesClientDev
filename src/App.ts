import * as PIXI from 'pixi.js';
import { Config } from './config';
import { ShapeManager } from './core/ShapeManager';
import { UIManager } from './core/UIManager';
import { ShapeFactory } from './core/ShapeFactory';
import { Scene } from './core/Scene';
import { Controls } from './core/Controls';

class App {
    private app!: PIXI.Application;

    constructor() {
        this.init();
    }

    private async init(): Promise<void> {
        const gameContainer = document.getElementById('game-container') as HTMLElement;
        this.app = new PIXI.Application();
        await this.app.init({
            backgroundColor: Config.backgroundColor,
            antialias: true,
            resizeTo: gameContainer,
        });

        document.getElementById('game-container')!.appendChild(this.app.canvas);

        const scene = new Scene(this.app);
        const uiManager = new UIManager();
        const shapeFactory = new ShapeFactory();
        const shapeManager = new ShapeManager(scene.shapeContainer, scene.canvasBounds, shapeFactory);
        new Controls(shapeManager, uiManager); 

        this.app.stage.addChild(scene);

        this.app.renderer.on('resize', (width, height) => {
            scene.resize(width, height);
        });

        scene.on('pointerdown', (event: PIXI.FederatedPointerEvent) => {
            const localPosition = scene.toLocal(event.global);
            shapeManager.createShapeAtPosition(localPosition.x, localPosition.y);
        });

        window.addEventListener('resize', () => {
            const canvasWidth = window.innerWidth * 0.8;
            const canvasHeight = window.innerHeight * 0.6;
            this.app.renderer.resize(canvasWidth, canvasHeight);
            scene.resize(canvasWidth, canvasHeight);
        });
        window.dispatchEvent(new Event('resize'));

        this.app.ticker.add((ticker) => {
            shapeManager.update(ticker);
            uiManager.updateInfo(shapeManager.getShapeCount(), shapeManager.getTotalArea());
        });
    }
}

export default App;