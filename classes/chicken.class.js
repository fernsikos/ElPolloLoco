class Chicken extends MoveableObject {
   
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ]

    height = 60;
    width = 60;
    y = 365;
    speed = 0.15+ 0.3 * Math.random();
    imageCounter = 0;
    chichen_sound = new Audio('audio/chicken1.wav');

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.chichen_sound.volume = 0.05;
        this.x = 200 + Math.random() * 500;
        this.loadImagesToCache(this.IMAGES_WALKING);
        this.animate();
        // this.playChickenSounds();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 10);

        setInterval(() => {
            this.moveLeft()
        }, 1000 / 60);
    }

    playChickenSounds() {
        setInterval(() => {
            this.chichen_sound.play()
        }, 15000)
    }
}