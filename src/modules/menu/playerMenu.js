import gameState from '../../gameconfig/gameState';
import Menu from './menu';

export default class PlayerMenu extends Menu {
  remap() {
    this.addMenuItem(gameState.playerName);
    this.addMenuItem(`H: ${gameState.playerHP}`);
    this.addMenuItem(`S: ${gameState.score}`);
  }
}