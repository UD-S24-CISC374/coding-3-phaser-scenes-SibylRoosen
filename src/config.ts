import Phaser from "phaser";
import MainScene from "./scenes/mainScene";
import PreloadScene from "./scenes/preloadScene";
import SceneTwo from "./scenes/SceneTwo";
import SceneThree from "./scenes/SceneThree";
import SceneFour from "./scenes/SceneFour";

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

export const CONFIG = {
    title: "My Untitled Phaser 3 Game",
    version: "0.0.1",
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [PreloadScene, MainScene, SceneTwo, SceneThree, SceneFour],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 200 },
        },
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
};
