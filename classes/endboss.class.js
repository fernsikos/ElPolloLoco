class Endboss extends MoveableObject {
    width = 300;
    height = 400;
    y = 50;
    x = 2000;

IMAGES_WALKING = [
    'img/4_enemie_boss_chicken/2_alert/G5.png',
    'img/4_enemie_boss_chicken/2_alert/G6.png',
    'img/4_enemie_boss_chicken/2_alert/G7.png',
    'img/4_enemie_boss_chicken/2_alert/G8.png',
    'img/4_enemie_boss_chicken/2_alert/G9.png',
    'img/4_enemie_boss_chicken/2_alert/G10.png',
    'img/4_enemie_boss_chicken/2_alert/G11.png',
    'img/4_enemie_boss_chicken/2_alert/G12.png',
];

imageCounter = 0;

constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImagesToCache(this.IMAGES_WALKING);
    this.animate();
}

animate() {
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
    }, 200);

    
}
}