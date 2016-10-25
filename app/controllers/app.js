import ResultListView from '../views/result-view';
import FormView from '../views/form-view';

export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }

    // grab data from api
    // when data comes back -- set up some views to show data
    // render views
    // setup a view to handle form
  start() {
    this.resultView = new ResultListView(this.appElement.querySelector('.results-table__list'), this.model);
    this.FormView = new FormView(this.appElement.querySelector('.home-form'), this);
    fetch('http://tiny-tn.herokuapp.com/collections/dwb-bpm')
        .then((res) => res.json())
        .then((data) => {
          this.model = data;
          this.resultView.model = this.model;

          this.resultView.render();
        });
  }

  logGames(player__1, player__2, score__1, score__2, dateTime) {
    fetch('http://tiny-tn.herokuapp.com/collections/dwb-bpm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ player__1, player__2, score__1, score__2, dateTime }),
    }).then((res) => res.json())
    .then((data) => {
      this.model = [data, ...this.model];
      this.resultView.model = this.model;

      this.resultView.render();
    });
  }
}
