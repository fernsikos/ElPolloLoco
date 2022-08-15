class Character extends MoveableObject {

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ]

    x = 120;
    y = 80;
    imageCounter = 0;
    world;
    speed = 8;
    walking_sound = new Audio('audio/walking_modified.mp3');


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.walking_sound.volume = 0.5;
        this.loadImagesToCache(this.IMAGES_WALKING);
        this.loadImagesToCache(this.IMAGES_JUMPING);
        this.animate();
        this.applyGravity();
    }

   

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
            }
            if (this.world.keyboard.left && this.x > -600) {
                this.moveLeft();
                this.imageMirrored = true;
                this.walking_sound.play();
            }
            if (this.world.keyboard.space && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 120;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING)
            } else {
                if (this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 1000 / 10)

    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y
    }

}