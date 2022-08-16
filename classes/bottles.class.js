class Bottle extends MoveableObject {
    IMAGES_BOTTLE_ON_GROUND = [
        "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
        "img/6_salsa_bottle/2_salsa_bottle_on_ground.png"
    ];

    height = 60;
    width = 60;
    y = 365;
    x = 300;
    random = Math.round(Math.random());

    constructor() {
        super();
        this.x = 200 + Math.random() * 1900;
        this.loadImage(this.IMAGES_BOTTLE_ON_GROUND[this.random])

    }
}