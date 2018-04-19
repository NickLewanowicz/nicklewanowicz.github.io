import Component from '@ember/component';

export default Component.extend({
    collapsed: false,

    actions: {
        toggleCollapsed() {
            this.toggleProperty('collapsed')
        }
    }
});
