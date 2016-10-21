import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books');

  this.route('book', {
    path: '/book/:id'
  });

  this.route('chapter', {
    path: '/chapter/:id'
  });
});

export default Router;
