import Ember from 'ember';

export default DS.Model.extend({
  avg: DS.attr('number'),
  fantasyTeam: DS.belongsTo('fantasy-team'),
  fg_playerid: DS.attr('number'),
  hr: DS.attr('number'),
  name: DS.attr('string'),
  pos: DS.attr('string'),
  r: DS.attr('number'),
  rbi: DS.attr('number'),
  sb: DS.attr('number'),
  sum: DS.attr('number'),
  value_lower: DS.attr('number'),
  value_upper: DS.attr('number'),
});
