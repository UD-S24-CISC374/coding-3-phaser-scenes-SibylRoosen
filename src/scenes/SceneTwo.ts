import Phaser from "phaser";

export default class SceneTwo extends Phaser.Scene {
    private platforms?: Phaser.Physics.Arcade.StaticGroup;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private player?: Phaser.Physics.Arcade.Sprite;
    private scoreText?: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "SceneTwo" });
    }

    create() {
        this.add.image(400, 300, "grand2");
        this.platforms = this.physics.add.staticGroup();
        const ground = this.platforms.create(
            400,
            568,
            "ground"
        ) as Phaser.Physics.Arcade.Sprite;
        ground.setScale(2).refreshBody();

        this.platforms.create(600, 400, "ground");
        this.platforms.create(100, 50, "ground");
        this.platforms.create(350, 700, "ground");
        this.platforms.create(300, 200, "ground");

        this.player = this.physics.add.sprite(100, 450, "dude");
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("dude", {
                start: 0,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "turn",
            frames: [{ key: "dude", frame: 4 }],
            frameRate: 20,
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("dude", {
                start: 5,
                end: 8,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard?.createCursorKeys();

        this.scoreText = this.add.text(
            16,
            16,
            "Press Space Bar To Change Background",
            {
                fontSize: "32px",
                color: "#000",
            }
        );
    }

    update() {
        if (!this.cursors) {
            return;
        }
        if (this.cursors.left.isDown) {
            this.player?.setVelocityX(-160);
            this.player?.anims.play("left", true);
        } else if (this.cursors.right.isDown) {
            this.player?.setVelocityX(160);
            this.player?.anims.play("right", true);
        } else {
            this.player?.setVelocityX(0);
            this.player?.anims.play("turn");
        }
        if (this.cursors.up.isDown && this.player?.body?.touching.down) {
            this.player.setVelocityY(-330);
        }
        if (this.cursors.space.isDown) {
            this.scene.start("SceneThree");
        }
    }
}
