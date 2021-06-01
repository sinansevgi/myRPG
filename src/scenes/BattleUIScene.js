import EnemyMenu from '../modules/menu/enemyMenu';
import ActionsMenu from '../modules/menu/actionsMenu';
import Message from '../modules/message';
import PlayerMenu from '../modules/menu/playerMenu';
import PlayerCharacter from '../modules/units/playerCharacter';

export default class BattleUIScene extends Phaser.Scene {
  constructor() {
    super('BattleUI');
  }

  create() {
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x542e71, 1);
    this.graphics.strokeRect(5, 345, 200, 250);
    this.graphics.fillRect(5, 345, 200, 250);
    this.graphics.strokeRect(210, 345, 380, 250);
    this.graphics.fillRect(210, 345, 380, 250);
    this.graphics.strokeRect(595, 345, 200, 250);
    this.graphics.fillRect(595, 345, 200, 250);

    this.menus = this.add.container();

    this.playerMenu = new PlayerMenu(600, 350, this);
    this.actionsMenu = new ActionsMenu(340, 350, this);
    this.enemiesMenu = new EnemyMenu(8, 350, this);
    this.currentMenu = this.actionsMenu;

    this.menus.add(this.actionsMenu);
    this.menus.add(this.enemiesMenu);
    this.menus.add(this.playerMenu);

    this.battleScene = this.scene.get('BattleScene');

    this.input.keyboard.on('keydown', this.onKeyInput, this);
    this.battleScene.events.on('PlayerSelect', this.onPlayerSelect, this);
    this.battleScene.events.on('UpdateMenu', this.updateMenus, this);
    this.events.on('Enemy', this.onEnemy, this);
    this.events.on('AttackEnemy', this.onAttackEnemy, this);
    this.sys.events.on('wake', this.createMenu, this);
    this.message = new Message(this, this.battleScene.events);
    this.add.existing(this.message);
    this.createMenu();
  }

  updateMenus() {
    this.enemiesMenu.clear();
    this.playerMenu.clear();
    this.enemiesMenu.remap(this.battleScene.enemy);
    this.playerMenu.remap();
    if (this.battleScene.selected_unit instanceof PlayerCharacter) {
      this.playerMenu.select();
      this.enemiesMenu.deselect();
    } else {
      this.playerMenu.deselect();
      this.enemiesMenu.select();
    }
  }

  createMenu() {
    this.updateMenus();
    this.battleScene.nextTurn();
  }

  onKeyInput(event) {
    if (this.currentMenu) {
      if (event.code === 'ArrowUp') {
        this.currentMenu.moveSelectionUp();
      } else if (event.code === 'ArrowDown') {
        this.currentMenu.moveSelectionDown();
      } else if (event.code === 'Space') {
        this.currentMenu.confirm();
      }
    }
  }

  onAttackEnemy(index) {
    const action = this.currentMenu.menuItems[index].text;
    this.battleScene.receivePlayerSelection(action);
    this.actionsMenu.deselect();
    this.currentMenu = null;
    this.updateMenus();
  }

  onPlayerSelect() {
    this.currentMenu = this.actionsMenu;
  }

  onEnemy() {
    this.actionsMenu.deselect();
    this.currentMenu = null;
    this.enemy.attack(this.player);
    this.updateMenus();
  }
}