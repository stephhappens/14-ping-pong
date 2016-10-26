class ResultItemView {
  constructor(model) {
        // setup data for our current table item
    this.model = model;

    this.el = document.createElement('div');
    this.el.classList.add('grid__game');

    this.el.innerHTML = `
    <div class="grid__game--date">Oct. 24 2:00 PM</div>
    <div class= "grid__game--content">
      <div class= "grid__game--content_1">
        <div class="grid__game--player_1"> Ryan </div>
        <div class="grid__game--score_1"> 5  </div>
      </div>
      <div class="grid__game--content_2">
        <div class="grid__game--player_2"> Dan </div>
        <div class="grid__game--score_2"> 9 </div>
      </div>
    </div>`;
  }

  render() {
    // When Scala API is online
    this.el.querySelector('.grid__game--player_1').innerText = this.model.players[0];
    this.el.querySelector('.grid__game--score_1').innerText = this.model.scores[0];
    this.el.querySelector('.grid__game--player_2').innerText = this.model.players[1];
    this.el.querySelector('.grid__game--score_2').innerText = this.model.scores[1];
    this.el.querySelector('.grid__game--date').innerText = this.model.dateTime;
    // console.log(this.model);

    // this.el.querySelector('.grid__game--player_1').innerText = this.model.players[0].name;
    // this.el.querySelector('.grid__game--score_1').innerText = this.model.players[0].score;
    // this.el.querySelector('.grid__game--player_2').innerText = this.model.players[1].name;
    // this.el.querySelector('.grid__game--score_2').innerText = this.model.players[1].score;
    // this.el.querySelector('.grid__game--date').innerText = this.model.time;
  }
}

export default class ResultListView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.innerHTML = '';
        // array loop our model
    this.model.games.forEach((one) => {
      const row = new ResultItemView(one);
      row.render();
      this.el.appendChild(row.el);
    });
  }
}
