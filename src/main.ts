import { Boot } from "@/scenes/Boot";
import { MainGame } from "@/scenes/MainGame";
import { GameOver } from "@/scenes/GameOver";
import { MainMenu } from "@/scenes/MainMenu";
import { Preloader } from "@/scenes/Preloader";

import { Game } from "phaser";

document.addEventListener("DOMContentLoaded", function () {
  //  Find out more information about the Game Config at:
  //  https://newdocs.phaser.io/docs/3.87.0/Phaser.Types.Core.GameConfig
  new Game({
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    title: "Scoundrel",
    pixelArt: true,
    roundPixels: true,
    parent: "game-container",
    backgroundColor: "#000",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
      Boot,
      Preloader,
      MainMenu,
      MainGame,
      GameOver
    ]
  });
});
