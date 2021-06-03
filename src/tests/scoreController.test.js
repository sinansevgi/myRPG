import ScoreController from '../modules/controllers/scoreController';

const testController = new ScoreController();

describe('Score Controller Class', () => {
  describe('#constructor', () => {
    test('it creates a new Todo instance', () => {
      expect(testController).toBeInstanceOf(ScoreController);
    });
    test('it assigns endpoint url', () => {
      expect(testController.url).toEqual('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:ymyPesVHkinuPVXSsoyz/scores/');
    });
  });
  describe('#postScore', () => {
    test('it should send score and username', async () => {
      const testPost = await testController.postScore({ user: 'test', score: 1 });
      expect(testPost.status).toEqual(201);
    });
    test('it should raise an error with empty data', async () => {
      testController.postScore({ })
        .catch((error) => {
          expect(error.status).toEqual(400);
        });
    });
    test('it should raise an error with bad data', async () => {
      testController.postScore({ name: 'test', point: 2 })
        .catch((error) => {
          expect(error.status).toEqual(400);
        });
    });
  });

  describe('#getScores', () => {
    test('it should fetch scoreboard', async () => {
      const { status } = await testController.getScores();
      expect(status).toEqual(200);
    });
    test('it should be defined', async () => {
      const response = await testController.getScores();
      expect(response).toBeDefined();
    });
  });
});