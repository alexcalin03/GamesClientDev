import * as PIXI from 'pixi.js';

export class Scene extends PIXI.Container {
    public readonly canvasBounds: PIXI.Rectangle;
    public readonly shapeContainer: PIXI.Container;
    private readonly canvasBackground: PIXI.Graphics;
    private readonly canvasMask: PIXI.Graphics;

    constructor(app: PIXI.Application) {
        super();
        this.interactive = true;

        this.canvasBackground = new PIXI.Graphics();
        this.canvasMask = new PIXI.Graphics();
        this.shapeContainer = new PIXI.Container();
        this.shapeContainer.mask = this.canvasMask;

        this.addChild(this.canvasBackground, this.canvasMask, this.shapeContainer);

        this.canvasBounds = new PIXI.Rectangle(0, 0, app.screen.width, app.screen.height);
        this.resize(app.screen.width, app.screen.height);
    }

    public resize(width: number, height: number): void {
        this.canvasBounds.width = width;
        this.canvasBounds.height = height;

        this.canvasBackground.clear();
        this.canvasMask.clear();

        const rectData = [0, 0, width, height] as const;
        this.canvasBackground.rect(...rectData).fill(0x000000);
        this.canvasMask.rect(...rectData).fill(0xffffff);
    }
}