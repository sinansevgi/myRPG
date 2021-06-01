export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'MainMenu',
    });
  }

  create() {
    this.add.circle(400, 200, 30, 0xffffff);
    this.add.image(400, 200, 'spider');
    this.welcome = this.add.text(400, 100, 'Aracna Fighter', {
      color: '#FFFFFF',
      fontSize: 60,
      fontStyle: 'bold',
      textAlign: 'center',
      fontFamily: 'Train One',
    }).setOrigin(0.5);

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'btnPlay',
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('btnPlayHover');
    }, this);
    this.btnPlay.on('pointerout', () => {
      this.setTexture('btnPlay');
    });
    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('btnPlayDown');
    }, this);
    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('btnPlay');
      this.scene.start('UserName');
    }, this);
  }
}
