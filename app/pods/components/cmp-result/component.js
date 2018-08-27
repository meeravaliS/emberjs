import Component from '@ember/component';

export default Component.extend({
  actions: {
    toRoute(p) {
      var queries = {
        queryParams: {
          price: p,
        }
      };
      this.sendAction('toPage', queries);

    }
  }
});
