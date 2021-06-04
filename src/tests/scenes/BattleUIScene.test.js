/**
 * @jest-environment jsdom
 */
import BattleUIScene from '../../scenes/BattleUIScene';

const testScene = new BattleUIScene();
describe('BootScene', () => {
  describe('#constructor', () => {
    test('Check if scene has proper key', () => {
      expect(testScene.sys.config).toBe('BattleUI');
    });
    test('Check if scene is defined', () => {
      expect(testScene.sys.config).not.toBe(undefined);
    });
    test('Check if scene is initiated', () => {
      expect(typeof testScene).toBe('object');
    });
  });
});