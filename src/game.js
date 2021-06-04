import * as Phaser from 'phaser';
import config from './gameconfig/config';

const runGame = () => {
  window.game = new Phaser.Game(config);
};

export { runGame as default };
