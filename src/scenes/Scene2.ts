import Phaser from "phaser";

export default class Scene2 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene2" });
    }

    create() {
        this.add.image(400, 300, "grand2");
    }

    update() {
        //this.fpsText.update();
    }
}
