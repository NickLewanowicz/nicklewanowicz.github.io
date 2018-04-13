import Component from '@ember/component';

export default Component.extend({
    educationExpand: false,
    actions: {
        toggleEducation: function() {
            this.toggleProperty('educationExpand')
        }
    }
});
