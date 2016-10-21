import DS from 'ember-data';

var attr = DS.attr,
    hasMany = DS.hasMany;

export default DS.Model.extend({
    title: attr(),
    seriesTitle: attr(),
    seriesNumber: attr(),
    author: hasMany('author'),
    category: hasMany('category'),
    description: attr(),
    chapters: hasMany('chapter'),

    chapterCount: function(){
        return this.get('chapters').length;
    }.property('chapters.[]')
});
