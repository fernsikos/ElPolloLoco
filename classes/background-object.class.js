class BackgroundObject extends MoveableObject {
    height = 480;
    width = 721;

    constructor(imgPath, x, y) {
        super().loadImage(imgPath)
        this.x = x;
        this.y = y;
    }
}