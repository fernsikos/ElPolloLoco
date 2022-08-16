class Statusbar extends DrawableObject {
    IMAGES_HEALTHBAR = [
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
    ]

    x = 10;
    y = 10;
    height = 30;
    width = 120;
    healthStatus = 100;

    constructor() {
        super();
        this.loadImagesToCache(this.IMAGES_HEALTHBAR);
        this.updateHealthbar(this.healthStatus);
    }

    syncronizeHealthStatus(energy) {
        this.healthStatus = energy;
        this.updateHealthbar(this.healthStatus) 
    }

    updateHealthbar(health) {
        if(health == 100) {
            this.loadImage("img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png");
        } else if(health > 80) {
            this.loadImage("img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png");
        } else if(health > 60) {
            this.loadImage("img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png");
        } else if(health > 40) {
            this.loadImage("img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png");
        } else if(health > 20) {
            this.loadImage("img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png");
        } else if(health == 0) {
            this.loadImage("img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png");
        }
    }
}
