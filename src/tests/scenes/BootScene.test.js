/**
 * @jest-environment jsdom
 */
import BootScene from '../../scenes/BootScene';

const testScene = new BootScene();
describe('BootScene', () => {
  describe('#constructor', () => {
    test('Check if scene has proper key', () => {
      expect(testScene.sys.config).toBe('Boot');
    });
    test('Check if scene is defined', () => {
      expect(testScene.sys.config).not.toBe(undefined);
    });
    test('Check if scene is initiated', () => {
      expect(typeof testScene).toBe('object');
    });
  });
});