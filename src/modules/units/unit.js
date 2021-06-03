import * as Phaser from 'phaser';

export default class Unit extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame);
    this.type = type;
    this.hp = hp;
    this.damage = damage;
    this.living = true;
  }

  setMenuItem(item) {
    this.menuItem = item;
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.hp = 0;
      this.living = false;
      this.visible = false;
    }
  }

  attack(target) {
    if (target.living) {
      target.takeDamage(this.damage);
      this.scene.events.emit('Message', `${this.type} slaps ${target.type} for ${this.damage} damage`);
    }
  }
}