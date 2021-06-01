import Unit from './unit';

export default class Enemy extends Unit {
  constructor(scene, x, y, texture, frame, type, hp, damage, scale) {
    super(scene, x, y, texture, frame, type, hp, damage);
    this.setScale(scale);
  }

  attack(target) {
    if (target.living) {
      target.takeDamage(this.damage);
      this.scene.events.emit('Message', `${this.type} bites ${target.type} for ${this.damage} damage`);
    }
  }
}