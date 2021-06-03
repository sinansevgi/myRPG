import * as Phaser from 'phaser';
import MenuItem from './menuItem';

export default class Menu extends Phaser.GameObjects.Container {
  constructor(x, y, scene, character) {
    super(scene, x, y);
    this.menuItems = [];
    this.menuItemIndex = 0;
    this.character = character;
    this.x = x;
    this.y = y;
  }

  addMenuItem(unit) {
    const menuItem = new MenuItem(0, this.menuItems.length * 50, unit, this.scene);
    this.menuItems.push(menuItem);
    this.add(menuItem);
  }

  moveSelectionUp() {
    this.menuItems[this.menuItemIndex].deselect();
    this.menuItemIndex -= 1;
    if (this.menuItemIndex < 0) this.menuItemIndex = this.menuItems.length - 1;
    this.menuItems[this.menuItemIndex].select();
  }

  moveSelectionDown() {
    this.menuItems[this.menuItemIndex].deselect();
    this.menuItemIndex += 1;
    if (this.menuItemIndex >= this.menuItems.length) this.menuItemIndex = 0;
    this.menuItems[this.menuItemIndex].select();
  }

  select(index) {
    if (!index) index = 0;
    this.menuItems[this.menuItemIndex].deselect();
    this.menuItemIndex = index;
    this.menuItems[this.menuItemIndex].select();
  }

  deselect() {
    this.menuItems[this.menuItemIndex].deselect();
    this.menuItemIndex = 0;
  }

  clear() {
    for (let i = 0; i < this.menuItems.length; i += 1) {
      this.menuItems[i].destroy();
    }
    this.menuItems.length = 0;
    this.menuItemIndex = 0;
  }
}