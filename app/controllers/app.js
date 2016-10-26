import ResultListView from '../views/result-view';
import FormView from '../views/form-view';

const url = 'https://obscure-anchorage-33466.herokuapp.com/games';

export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

  start() {
    this.resultView = new ResultListView(this.appElement.querySelector('.grid'), this.model);
    this.FormView = new FormView(this.appElement.querySelector('.home-form'), this);
    fetch(url)
    .then((res) => res.json()).then((data) => {
      this.model = data;
      this.resultView.model = this.model;

      this.resultView.render();
    });
  }

  logGames(player1, player2, score1, score2) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player_1: player1,
        player_2: player2,
        score_1: parseInt(score1),
        score_2: parseInt(score2),
      }),
    }).then((res) => res.json())
    .then((data) => {
      this.model.games = [
        ...this.model.games, data.game,
      ];
      this.resultView.model = this.model;

      this.resultView.render();
    });
  }
}
