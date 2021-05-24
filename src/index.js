import * as Phaser from 'phaser';
import MainMenuScene from './scenes/MainMenuScene';
import UserNameScene from './scenes/UserNameScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#222222',
  parent: 'game-container',
  dom: {
    createContainer: true,
  },
  scene: [MainMenuScene, UserNameScene],
};

const game = new Phaser.Game(config);
