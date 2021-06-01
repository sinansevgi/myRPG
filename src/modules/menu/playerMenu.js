import gameState from '../../gameconfig/gameState';
import Menu from './menu';

export default class PlayerMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
  }

  remap() {
    this.addMenuItem(gameState.playerName);
    this.addMenuItem(`H: ${gameState.playerHP}`);
    this.addMenuItem(`S: ${gameState.score}`);
  }
}