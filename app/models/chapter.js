import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  chapterNumber: attr(),
  title: attr(),
  content: attr(),
  book: belongsTo('book')
});
