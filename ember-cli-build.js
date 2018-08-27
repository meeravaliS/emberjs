'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });
  
  // app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('vendor/css/bootstrap.min.css');
  app.import('vendor/css/AdminLTE.min.css');

  app.import('vendor/js/bootstrap.min.js');

  return app.toTree();
};
