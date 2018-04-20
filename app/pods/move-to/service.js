import Service from '@ember/service';
const {
    requestIdleCallback,
  } = window;
export default Service.extend({
  move (target) {
    if (!target) {
      return;
    }
    requestIdleCallback(() => {
      this.moveTo.move(target);
    });
  }
});
