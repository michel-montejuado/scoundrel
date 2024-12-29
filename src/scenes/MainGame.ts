import { Scene } from "phaser";

export class MainGame extends Scene {
    camera?: Phaser.Cameras.Scene2D.Camera;
    background?: Phaser.GameObjects.Image;
    msg_text?: Phaser.GameObjects.Text;

    constructor() {
        super("MainGame");
    }

    create() {
        this.camera = this.cameras.main;

        this.background = this.add.image(512, 384, "background");

        this.msg_text = this.add.text(512, 384, "Make something fun!\nand share it with us:\nsupport@phaser.io", {
            fontFamily: "Arial Black", fontSize: 38, color: "#ffffff",
            stroke: "#000000", strokeThickness: 8,
            align: "center"
        });
        this.msg_text.setOrigin(0.5);

        this.input.once("pointerdown", () => {
            this.scene.start("GameOver");
        });
    }
}