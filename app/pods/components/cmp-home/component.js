import Component from '@ember/component';

export default Component.extend({
  notRoundTrip: true,
  filter: {
    from: null,
    to: null,
    on: null,
    return: null
  },
  actions: {
    toResult() {
      // "" (query-params from=filter.from.name to=filter.to.name on=filter.on return=filter.return) 
      // "" (query-params from=filter.from.name to=filter.to.name on=filter.on return=filter.return) 
      var queries = {
        queryParams: {
          from: this.get('filter.from.name'),
          to: this.get('filter.to.name'),
          on:this.get('filter.on'),
          return:this.get('filter.return')
        }
      };

      if (!this.get('filter.from') || !this.get('filter.to') || !this.get('filter.on')) {
        this.$('.required-msg').addClass('show');
      }

      if (!this.get('filter.return') && this.get('notRoundTrip') == false) {
        this.$('.required-msg').addClass('show');
      }

      if (this.get('notRoundTrip') == true) {
        if (this.get('filter.from') && this.get('filter.to') && this.get('filter.on')) {
          this.$('.required-msg').removeClass('show');
          this.sendAction('toPage',queries);
        }
      } else {
        if (this.get('filter.from') && this.get('filter.to') && this.get('filter.on') && this.get('filter.return')) {
          this.$('.required-msg').removeClass('show');
          this.sendAction('toPage',queries);
        }
      }
    }
  }
});
