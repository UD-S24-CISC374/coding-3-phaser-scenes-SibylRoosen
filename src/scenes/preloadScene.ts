import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("grand1", "./assets/grand1.png");
        this.load.image("grand2", "./assets/grand2.png");
        this.load.image("grand3", "./assets/grand3.png");
        this.load.image("grand4", "./assets/grand4.png");
        this.load.image("ground", "assets/platform.png");
    }

    create() {
        this.scene.start("MainScene");
    }
}
