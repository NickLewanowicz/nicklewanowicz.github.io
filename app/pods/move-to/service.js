import Service from '@ember/service';
const {
    requestIdleCallback,
    MoveTo,
  } = window;
export default Service.extend({
  moveTo: new MoveTo({
    duration: 600,
    easing: 'easeOutQuart'
  }),
  move (target) {
    if (!target) {
      return;
    }
    requestIdleCallback(() => {
      this.moveTo.move(target);
    });
  }
});
