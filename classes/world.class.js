class World {

    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    level = level1;
    character = new Character();
    healthbar = new Statusbar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.passWorld();
        this.checkCollisions();
    }

    passWorld() {
        this.character.world = this;
    }

    draw() {
        //cleart das Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); //Ab hier bewegen sich Objekte
        this.addToMapFromArray(this.level.backgroundObjects);
        this.addToMapFromArray(this.level.clouds);
        this.addToMap(this.character);
        this.addToMapFromArray(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0); // ab hier sind objekte wieder statisch
        this.addToMap(this.healthbar);

        //Draw wird immer wieder ausgeführt
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addToMap(mo) {
        if (mo.imageMirrored) {
            this.mirrorImage(mo)
        }
        mo.draw(this.ctx);
        mo.drawRectangles(this.ctx);
        if (mo.imageMirrored) {
            this.restoreMirroredImage(mo)
        }
    }

    addToMapFromArray(array) {
        array.forEach(item => {
            this.ctx.drawImage(item.img, item.x, item.y, item.width, item.height)
            item.drawRectangles(this.ctx)
        })
    }

    mirrorImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1;
    }

    restoreMirroredImage(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.healthbar.syncronizeHealthStatus(this.character.energy);
                }
            });
        }, 200);
    }

}