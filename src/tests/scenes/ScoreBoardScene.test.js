/**
 * @jest-environment jsdom
 */
import ScoreBoard from '../../scenes/ScoreBoardScene';

const testScene = new ScoreBoard();
describe('BootScene', () => {
  describe('#constructor', () => {
    test('Check if scene has proper key', () => {
      expect(testScene.sys.config).toBe('ScoreBoard');
    });
    test('Check if scene is defined', () => {
      expect(testScene.sys.config).not.toBe(undefined);
    });
    test('Check if scene is initiated', () => {
      expect(typeof testScene).toBe('object');
    });
    test('check if leaderboard created', () => {
      expect(testScene.createLeaderboard()).not.toBe(undefined);
    });
  });
});