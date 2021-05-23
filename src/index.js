import * as Phaser from 'phaser';
import MainMenuScene from './scenes/MainMenuScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#222222',
  parent: 'game-container',
  scene: [MainMenuScene],
};

const game = new Phaser.Game(config);
game.scene.start();
