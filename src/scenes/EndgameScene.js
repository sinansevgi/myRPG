import gameState from '../gameconfig/gameState';

export default class EndgameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'EndGame',
    });
  }

  create() {
    this.cameras.main.setBackgroundColor('#fdca40');
    const endMessage = `${gameState.playerName} fainted.`;
    this.message = this.add.text(400, 200, endMessage, {
      color: '#FFFFFF',
      fontSize: 30,
      fontStyle: 'bold',
      textAlign: 'center',
      fontFamily: 'Train One',
    }).setOrigin(0.5);
    this.point = this.add.text(400, 300, `${gameState.playerName} managed to win ${gameState.score} spider points.`, {
      color: '#FFFFFF',
      fontSize: 30,
      fontStyle: 'bold',
      textAlign: 'center',
      fontFamily: 'Train One',
    }).setOrigin(0.5);
  }
}
