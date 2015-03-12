import DS from 'ember-data';

var League = DS.Model.extend({
  title: DS.attr('string'),
  fantasyTeam: DS.attr('hasMany')
});

export default League;
