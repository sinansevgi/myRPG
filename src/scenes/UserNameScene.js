export default class UserNameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'UserName',
    });
  }

  preload() {
    this.load.html('form', './assets/playerForm.html');
  }

  create() {
    this.nameInput = this.add.dom(400, 300).createFromCache('form');

    this.message = this.add.text(400, 200, 'Hello Adventurer, \nMay I have your name', {
      color: '#FFFFFF',
      fontSize: 30,
      fontStyle: 'bold',
      textAlign: 'center',
      fontFamily: 'Train One',
    }).setOrigin(0.5);

    this.submit_info = this.add.text(400, 400, 'Please press ENTER ↵ \nafter typing your name', {
      color: '#FFFFFF',
      fontSize: 30,
      fontStyle: 'bold',
      fontFamily: 'Train One',
    }).setOrigin(0.5);

    this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    this.returnKey.on('down', (event) => {
      const name = this.nameInput.getChildByName('name');
    });
  }
}
