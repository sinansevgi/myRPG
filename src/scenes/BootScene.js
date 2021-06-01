import * as Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('btnPlay', 'assets/btnPlay.png');
    this.load.image('btnPlayHover', 'assets/btnPlayHover.png');
    this.load.image('btnPlayDown', 'assets/btnPlayDown.png');
    this.load.image('tiles', '../assets/map/tuxmon-sample-32px-extruded.png');
    this.load.tilemapTiledJSON('map', '../assets/map/tuxemon-town.json');
    this.load.spritesheet('player', '../assets/player/lady.png', {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet('spider', '../assets/spider.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('foods', '../assets/food_items16x16.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.html('player_form', '../assets/playerForm.html');
  }

  create() {
    this.scene.start('MainMenu');
  }
}