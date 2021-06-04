import * as Phaser from 'phaser';
import gameState from '../gameconfig/gameState';

export default class UserNameScene extends Phaser.Scene {
  constructor() {
    super('UserName');
  }

  create() {
    this.nameInput = this.add.dom(400, 300).createFromCache('player_form');

    this.message = this.add.text(400, 200, 'Hello Adventurer, \nMay I have your name', {
      color: '#FFFFFF',
      fontSize: 30,
      fontStyle: 'bold',
      align: 'center',
      fontFamily: 'Train One',
    }).setOrigin(0.5);

    this.submit_info = this.add.text(400, 400, 'Please press ENTER ↵ \nafter typing your name', {
      color: '#FFFFFF',
      fontSize: 30,
      fontStyle: 'bold',
      fontFamily: 'Train One',
    }).setOrigin(0.5);

    this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    this.returnKey.on('down', () => {
      const playerName = this.nameInput.getChildByName('name');
      if (playerName.value === '') {
        this.message.setText('Please Enter Valid Name');
      } else {
        gameState.playerName = playerName.value;
        gameState.score = 0;
        this.scene.start('World');
      }
    });
  }
}
