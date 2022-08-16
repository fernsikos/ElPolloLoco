class Coinbar extends DrawableObject {
    IMAGE_COINBAR = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
    ];

    x = 10;
    y = 37;
    height = 32;
    width = 120;

    constructor() {
        super();
        this.loadImagesToCache(this.IMAGE_COINBAR);
        this.loadImage("img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png")
    }
}