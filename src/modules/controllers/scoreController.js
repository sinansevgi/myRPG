import axios from 'axios';

class ScoreController {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:ymyPesVHkinuPVXSsoyz/scores/';
  }

  async postScore(data) {
    const response = await axios.post(this.url, data)
      .then((response) => response)
      .catch((error) => error);
    return response;
  }

  async getScores() {
    const leaderboard = await axios.get(this.url)
      .then((response) => response).catch((error) => error);
    return leaderboard;
  }
}
export { ScoreController as default };