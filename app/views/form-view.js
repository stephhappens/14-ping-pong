export default class FormView {
  constructor(el, controller) {
    this.el = el;
    this.controller = controller;


    const onsubmit = (ev) => {
      // stops the form actually submiting
      ev.preventDefault();

      const player__1 = this.el.querySelector('#?????').value;
      const player__2 = this.el.querySelector('#?????').value;
      const score__1 = this.el.querySelector('#?????').value;
      const score__2 = this.el.querySelector('#?????').value;
      const dateTime = this.el.querySelector('#?????').value;

      this.controller.logGame(player__1, player__2, score__1, score__2, dateTime);

      this.el.querySelector('#??????').value = '';
      this.el.querySelector('#??????').value = '';
      this.el.querySelector('#??????').value = '';
      this.el.querySelector('#??????').value = '';
      this.el.querySelector('#??????').value = '';
    };

    this.el.addEventListener('submit', onsubmit);
  }
}
