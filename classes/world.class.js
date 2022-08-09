class World {

    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    level = level1;
    character = new Character();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.passWorld();
    }

    passWorld() {
        this.character.world = this;
    }

    draw() {
        //cleart das Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addToMapFromArray(this.level.backgroundObjects);
        this.addToMapFromArray(this.level.clouds);
        this.addToMap(this.character);
        this.addToMapFromArray(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);


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
        this.drawRectangles(mo);
        if (mo.imageMirrored) {
            this.restoreMirroredImage(mo)
        }
    }

    addToMapFromArray(array) {
        array.forEach(item => {
            this.ctx.drawImage(item.img, item.x, item.y, item.width, item.height)
            this.drawRectangles(item)
        })
    }

    drawRectangles(mo) {

    if(this instanceof Character) {
         this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'blue';
        this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
        this.ctx.stroke();
    }
    // this.ctx.beginPath();
    // this.ctx.lineWidth = '5';
    // this.ctx.strokeStyle = 'blue';
    // this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
    // this.ctx.stroke();
       
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
}