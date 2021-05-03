import * as Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#222222',
  parent: 'game-container',
};

const game = new Phaser.Game(config);
game.scene.start();