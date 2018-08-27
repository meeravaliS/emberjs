import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  queryParams: ['from', 'to', 'on', 'return', 'price'],
  from: null,
  price: null,
  filteredflights: computed('from', 'price', 'model', function () {
    let from = this.get('from');
    let price = this.get('price');
    let flights = this.get('model');

    if (price && from) {
      let fs=flights.filterBy('from', from);
      return (price == 'lt') ? fs.filter((e) => e.price < 2500) : fs.filter((e) => e.price > 2499);
    } else if (from) {
      return flights.filterBy('from', from);
    } else {
      return flights;
    }
  })
});
