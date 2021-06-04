/**
 * @jest-environment jsdom
 */
import BattleScene from '../../scenes/BattleScene';

const testScene = new BattleScene();
describe('BootScene', () => {
  describe('#constructor', () => {
    test('Check if scene has proper key', () => {
      expect(testScene.sys.config).toBe('BattleScene');
    });
    test('Check if scene is defined', () => {
      expect(testScene.sys.config).not.toBe(undefined);
    });
    test('Check if scene is initiated', () => {
      expect(typeof testScene).toBe('object');
    });
  });
});