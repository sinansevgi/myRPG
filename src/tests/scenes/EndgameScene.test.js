/**
 * @jest-environment jsdom
 */
import EndgameScene from '../../scenes/EndgameScene';

const testScene = new EndgameScene();
describe('BootScene', () => {
  describe('#constructor', () => {
    test('Check if scene has proper key', () => {
      expect(testScene.sys.config).toBe('EndGame');
    });
    test('Check if scene is defined', () => {
      expect(testScene.sys.config).not.toBe(undefined);
    });
    test('Check if scene is initiated', () => {
      expect(typeof testScene).toBe('object');
    });
  });
});