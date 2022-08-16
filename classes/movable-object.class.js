class MoveableObject extends DrawableObject {
   
    
   
    speed = 0.15;
    imageMirrored = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    lastMove = new Date().getTime();

    

    playAnimation(images) {
        let i = this.imageCounter % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.imageCounter++;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0
    }

    isHurt() {
        let timePassedSinceLastHit = new Date().getTime() - this.lastHit;
        timePassedSinceLastHit = timePassedSinceLastHit / 1000;
        return timePassedSinceLastHit < 1
    }

    isResting() {
        let timePassedSinceLAstMove = new Date().getTime() - this.lastMove;
        timePassedSinceLAstMove = timePassedSinceLAstMove / 1000;
        return timePassedSinceLAstMove > 0.1 && timePassedSinceLAstMove < 5;
    }

    isSleepimg() {
        let timePassedSinceLAstMove = new Date().getTime() - this.lastMove;
        timePassedSinceLAstMove = timePassedSinceLAstMove / 1000;
        return timePassedSinceLAstMove > 5;
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
        this.lastMove = new Date().getTime();
    }

    moveRight() {
        this.x += this.speed;
        this.imageMirrored = false;
        this.walking_sound.play();;
        this.lastMove = new Date().getTime();
    }

    moveLeft() {
        this.x -= this.speed
        this.lastMove = new Date().getTime();
    }

    isAboveGround() {
        return this.y < 170
    }
}