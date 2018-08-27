import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('airport');
  },
  actions: {
    goTo(queries) {
      // "" (query-params from=filter.from.name to=filter.to.name on=filter.on return=filter.return) 
      this.transitionTo('search-result', queries);
    }
  }
});
