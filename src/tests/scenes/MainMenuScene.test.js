/**
 * @jest-environment jsdom
 */
import MainMenuScene from '../../scenes/MainMenuScene';

const testScene = new MainMenuScene();
describe('BootScene', () => {
  describe('#constructor', () => {
    test('Check if scene has proper key', () => {
      expect(testScene.sys.config).toBe('MainMenu');
    });
    test('Check if scene is defined', () => {
      expect(testScene.sys.config).not.toBe(undefined);
    });
    test('Check if scene is initiated', () => {
      expect(typeof testScene).toBe('object');
    });
  });
});