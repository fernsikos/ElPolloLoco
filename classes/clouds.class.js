class Clouds extends MoveableObject {

    height = 300;
    width = 720;
    y = 20;
    

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
       this.moveLeft();
    }

   
}