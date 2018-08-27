import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import {
  observer
} from '@ember/object';

import Ember from 'ember';

export default Controller.extend({
  session: service(),
  authenticatedObserver: observer('session.isAuthenticated', function () {
    var self = this;
    Ember.run.later(() => {
      self.send('invalidateSession');//call invalidateSession action
    }, 600000);

  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
