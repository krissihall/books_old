import Ember from 'ember';

export default Ember.Controller.extend({

  books: function(){
    return this.store.findAll('book');
  }.property(),

  actions: {

    goToBook: function (id) {
      this.transitionToRoute('/book/' + id);
    }

  }

});
