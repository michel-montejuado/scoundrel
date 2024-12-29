import { Boot } from '@/scenes/Boot';
import { MainGame as MainGame } from '@/scenes/MainGame';
import { GameOver } from '@/scenes/GameOver';
import { MainMenu } from '@/scenes/MainMenu';
import { Preloader } from '@/scenes/Preloader';

import { Game } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
export default new Game({
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: 'game-container',
  backgroundColor: '#028af8',
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