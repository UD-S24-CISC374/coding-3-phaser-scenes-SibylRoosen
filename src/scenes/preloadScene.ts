import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("grand1", "./assets/grand1.png");
        this.load.image("grand2", "./assets/Grand2.png");
        this.load.image("grand3", "./assets/grand3.png");
        this.load.image("grand4", "./assets/grand4.png");
        this.load.image("ground", "assets/platform.png");
        this.load.spritesheet("dude", "assets/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        this.scene.start("MainScene");
    }
}
