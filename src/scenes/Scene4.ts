import Phaser from "phaser";

export default class Scene4 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene4" });
    }

    create() {
        this.add.image(400, 300, "grand4");
    }

    update() {
        //this.fpsText.update();
    }
}
