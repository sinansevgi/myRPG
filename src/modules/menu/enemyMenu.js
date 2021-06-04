import Menu from './menu';

export default class EnemyMenu extends Menu {
  confirm() {
    this.scene.events.emit('Enemy', this.menuItemIndex);
  }

  remap(unit) {
    this.addMenuItem(unit.type);
    this.addMenuItem(`H: ${unit.hp}`);
  }
}