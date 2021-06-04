import * as Phaser from 'phaser';
import gameState from '../gameconfig/gameState';
import ScoreController from '../modules/controllers/scoreController';

export default class EndgameScene extends Phaser.Scene {
  constructor() {
    super('EndGame');
    this.scoreController = new ScoreController();
  }

  create() {
    this.submitScore();
    this.cameras.main.setBackgroundColor('#fdca40');
    const endMessage = `${gameState.playerName} fainted.`;
    const textStyle = {
      color: '#FFFFFF',
      fontSize: 30,
      fontStyle: 'bold',
      align: 'center',
      fontFamily: 'Train One',
    };
    this.add.text(400, 200, endMessage, textStyle).setOrigin(0.5);
    this.add.text(400, 300, `${gameState.playerName} managed to win ${gameState.score} spider points.`, textStyle).setOrigin(0.5);
    this.add.text(400, 400, 'Press space to see scoreboard.', textStyle).setOrigin(0.5);
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.spaceKey.on('down', () => {
      this.scene.start('ScoreBoard');
    });
  }

  submitScore() {
    if (gameState.score > 0) {
      this.scoreController.postScore({ user: gameState.playerName, score: gameState.score });
    }
  }
}
