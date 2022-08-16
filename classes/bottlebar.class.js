class Bottlebar extends DrawableObject {
    IMAGE_BOTTLEBAR = [
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
    ];

    x = 10;
    y = 64;
    height = 32;
    width = 120;

    constructor() {
        super();
        this.loadImagesToCache(this.IMAGE_BOTTLEBAR);
        this.loadImage("img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png")
    }
}