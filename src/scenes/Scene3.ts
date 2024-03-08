import Phaser from "phaser";

export default class Scene3 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene3" });
    }

    create() {
        this.add.image(400, 300, "grand3");
    }

    update() {
        //this.fpsText.update();
    }
}
