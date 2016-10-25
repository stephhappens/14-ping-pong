export default class FormView {
  constructor(el, controller) {
    this.el = el;
    this.controller = controller;

    const onsubmit = (ev) => {
            // stops the form actually submiting
      ev.preventDefault();

      const player_1 = this.el.querySelector('#home-form-player_1').value;
      const score_1 = this.el.querySelector('#home-form-score_1').value;
      const player_2 = this.el.querySelector('#home-form-player_2').value;
      const score_2 = this.el.querySelector('#home-form-score_2').value;

      this.controller.logGames(player_1, player_2, score_1, score_2);

      this.el.querySelector('#home-form-player_1').value = '';
      this.el.querySelector('#home-form-score_1').value = '';
      this.el.querySelector('#home-form-player_2').value = '';
      this.el.querySelector('#home-form-score_2').value = '';
    };
    this.el.addEventListener('submit', onsubmit);
  }
}
