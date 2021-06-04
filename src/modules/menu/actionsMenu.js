import Menu from './menu';

export default class ActionsMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.addMenuItem('Attack');
    this.addMenuItem('Run');
  }

  confirm() {
    this.scene.events.emit('AttackEnemy', this.menuItemIndex);
  }
}