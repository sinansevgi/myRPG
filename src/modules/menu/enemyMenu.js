import Menu from './menu';

export default class EnemyMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
  }

  confirm() {
    this.scene.events.emit('Enemy', this.menuItemIndex);
  }

  remap(unit) {
    this.addMenuItem(unit.type);
    this.addMenuItem(`H: ${unit.hp}`);
  }
}