export class UIManager {
    private countText: HTMLElement;
    private areaText: HTMLElement;
    private shapesPerSecondValue: HTMLElement;
    private gravityValue: HTMLElement;

    constructor() {
        this.countText = document.getElementById('shapes-count-text')!;
        this.areaText = document.getElementById('shapes-area-text')!;
        this.shapesPerSecondValue = document.getElementById('shapes-per-second-value')!;
        this.gravityValue = document.getElementById('gravity-value')!;
    }

    public updateInfo(shapeCount: number, totalArea: number): void {
        this.countText.innerText = `Shapes: ${shapeCount}`;
        this.areaText.innerText = `Area: ${Math.round(totalArea)} px²`;
    }

    public updateControls(shapesPerSecond: number, gravity: number): void {
        this.shapesPerSecondValue.innerText = shapesPerSecond.toString();
        this.gravityValue.innerText = gravity.toFixed(1);
    }
}