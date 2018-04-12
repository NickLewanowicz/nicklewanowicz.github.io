import Component from '@ember/component';

export default Component.extend({
    educationExpand: false,
    actions: {
        toggleEducation: function() {
            console.log(this.get('educationExpand'))
            this.toggleProperty('educationExpand')
        }
    }
});
