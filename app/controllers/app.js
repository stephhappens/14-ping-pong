import ResultListView from '../views/result-view';
import FormView from '../views/form-view';

export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

  start() {
    this.resultView = new ResultListView(this.appElement.querySelector('.grid__game'), this.model);
    this.FormView = new FormView(this.appElement.querySelector('.home-form'), this);
    fetch('https://hidden-thicket-10616.herokuapp.com/games').then((res) => res.json()).then((data) => {
      this.model = data;
      this.resultView.model = this.model;

      this.resultView.render();
    });
  }

  logGames(player_1, player_2, score_1, score_2, dateTime) {
    fetch('https://hidden-thicket-10616.herokuapp.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ player_1, player_2, score_1, score_2, dateTime }),
    }).then((res) => res.json()).then((data) => {
      this.model = [
        data, ...this.model,
      ];
      this.resultView.model = this.model;

      this.resultView.render();
    });
  }
}
