class MoveableObject {
    x;
    y;
    img;
    imageCache = [];
    height = 260;
    width = 130;
    speed = 0.15;
    imageMirrored = false;
    speedY = 0;
    acceleration = 2;

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

    playAnimation(images) {
        let i = this.imageCounter % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.imageCounter++;
    }



    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    jump() {
        this.speedY = 25;
    }

    moveRight() {
        this.x += this.speed;
        this.imageMirrored = false;
        this.walking_sound.play();;
    }

    moveLeft() {
        this.x -= this.speed
    }

    isAboveGround() {
        return this.y < 170
    }
}