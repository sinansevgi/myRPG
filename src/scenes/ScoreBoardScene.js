import * as Phaser from 'phaser';
import ScoreController from '../modules/controllers/scoreController';

export default class ScoreBoard extends Phaser.Scene {
  constructor() {
    super({
      key: 'ScoreBoard',
    });
    this.scoreController = new ScoreController();
  }

  create() {
    this.cameras.main.setBackgroundColor('#fdca40');
    this.createLeaderboard();
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  async createLeaderboard() {
    let textY = 150;
    const leaderboard = await this.scoreController.getScores();
    const result = leaderboard.sort((b, a) => a.score - b.score).slice(0, 10);
    const styleText = {
      color: '#000000',
      fontSize: 20,
      fontStyle: 'bold',
      align: 'left',
      fontFamily: 'Train One',
    };
    this.add.text(400, textY - 100, 'SCOREBOARD', styleText).setOrigin(0.5, 0.5);
    this.add.text(350, textY - 50, 'Player', styleText).setOrigin(0.5, 0.5);
    this.add.text(450, textY - 50, 'Score', styleText).setOrigin(0.5, 0.5);
    result.forEach((record) => {
      this.add.text(350, textY, `${record.user}`, styleText).setOrigin(0.5, 0.5);
      this.add.text(450, textY, `${record.score}`, styleText).setOrigin(0.5, 0.5);
      textY += 25;
    });
  }
}