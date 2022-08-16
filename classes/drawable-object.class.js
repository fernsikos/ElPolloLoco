class DrawableObject {
    x;
    y;
    height = 260;
    width = 130;
    img;
    imageCache = [];
    imageCounter = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImagesToCache(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawRectangles(ctx) {

        if (this instanceof Chicken || this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}