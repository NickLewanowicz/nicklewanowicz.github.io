import Component from '@ember/component';
import moment from 'moment';
import { computed } from '@ember/object';

export default Component.extend({
    monthsExperience: computed(function() {
        let data = this.get('config')
        let total = 0
        for(let i=0; i < data.length-1; i++){ 
            let start = data[i].startDate
            let end = ('Present' == data[i].endDate) ? moment(new Date()).format("YYYY-MM-DD") : data[i].endDate
            total += moment(end.split('-').map(Number)).diff(moment(start.split('-').map(Number)), 'months', false)+1
        }
        return total
    })

});
