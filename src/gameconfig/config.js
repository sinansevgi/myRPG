import Phaser from 'phaser';
import MainMenuScene from '../scenes/MainMenuScene';
import UserNameScene from '../scenes/UserNameScene';
import BootScene from '../scenes/BootScene';
import WorldScene from '../scenes/WorldScene';
import BattleScene from '../scenes/BattleScene';
import BattleUIScene from '../scenes/BattleUIScene';
import EndgameScene from '../scenes/EndgameScene';
import ScoreBoard from '../scenes/ScoreBoardScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0,
      },
      debug: true,
    },
  },
  dom: {
    createContainer: true,
  },
  scene: [
    BootScene,
    MainMenuScene,
    UserNameScene,
    WorldScene,
    BattleScene,
    BattleUIScene,
    EndgameScene,
    ScoreBoard,
  ],
};

export { config as default };