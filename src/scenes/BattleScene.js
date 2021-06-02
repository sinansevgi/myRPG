import * as Phaser from 'phaser';
import gameState from '../gameconfig/gameState';
import PlayerCharacter from '../modules/units/playerCharacter';
import Enemy from '../modules/units/spiderCharacter';

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('BattleScene');
  }

  create() {
    this.cameras.main.setBackgroundColor('#fdca40');
    this.startBattle();
    this.sys.events.on('wake', this.startBattle, this);
  }

  startBattle() {
    const player = new PlayerCharacter(this, 700, 150, 'player', 1, gameState.playerName, gameState.playerHP, Math.floor(gameState.playerHP / 4));
    this.add.existing(player);
    const enemySize = Math.floor(Math.random() * 150);
    const enemy = new Enemy(this, 100, 150, 'spider', 5, 'Spider', enemySize, Math.floor(enemySize / 3), Math.floor((enemySize / 50) + 1));
    this.add.existing(enemy);
    this.player = player;
    this.enemy = enemy;
    this.selected_unit = player;
    this.scene.run('BattleUI');
  }

  checkEndBattle() {
    let victory = true;
    let gameOver = true;
    if (this.enemy.living) {
      victory = false;
    }
    if (this.player.living) {
      gameOver = false;
    }
    return { victory, gameOver };
  }

  endBattle() {
    this.player.destroy();
    this.enemy.destroy();
    this.scene.sleep('BattleUI');
    this.scene.switch('World');
  }

  nextTurn() {
    const result = this.checkEndBattle();
    if (result.victory || result.gameOver) {
      if (result.gameOver) {
        this.scene.sleep('BattleUI');
        this.scene.run('EndGame');
        return;
      }
      gameState.score += this.enemy.scale;
      this.endBattle();
      return;
    }
    if (this.selected_unit instanceof PlayerCharacter) {
      this.events.emit('PlayerSelect', this.enemy);
    } else {
      this.selected_unit.attack(this.player);
      this.selected_unit = this.player;
      gameState.playerHP = this.player.hp;
      this.events.emit('UpdateMenu');
      this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
    }
  }

  receivePlayerSelection(action) {
    if (action === 'Attack') {
      this.player.attack(this.enemy);
      this.selected_unit = this.enemy;
    } else {
      this.endBattle();
    }
    this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
  }

  exitBattle() {
    this.scene.sleep('BattleUI');
    this.scene.switch('World');
  }

  wake() {
    this.scene.run('BattleUI');
    this.time.addEvent({ delay: 3000, callback: this.exitBattle, callbackScope: this });
  }
}