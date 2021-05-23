export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'MainMenu',
    });
  }

  preload() {
    this.load.image('btnPlay', 'assets/btnPlay.png');
    this.load.image('btnPlayHover', 'assets/btnPlayHover.png');
    this.load.image('btnPlayDown', 'assets/btnPlayDown.png');
  }

  create() {
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'btnPlay',
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerover', function () {
      this.btnPlay.setTexture('btnPlayHover');
    }, this);
    this.btnPlay.on('pointerout', function () {
      this.setTexture('btnPlay');
    });
    this.btnPlay.on('pointerdown', function () {
      this.btnPlay.setTexture('btnPlayDown');
    }, this);
    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('btnPlay');
      this.scene.start('UserName');
    }, this);
  }
}
