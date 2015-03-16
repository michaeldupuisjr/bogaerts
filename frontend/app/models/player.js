import Ember from 'ember';

var Player = DS.Model.extend({
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

Player.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Xander Bogaerts',
      fantasyTeam: 4,
      pos: '3B',
      avg: 0.256,
      hr: 18,
      r: 65,
      rbi: 70,
      sb: 10
    },
    {
      id: 2,
      name: 'Dustin Pedroia',
      fantasyTeam: null,
      pos: '2B',
      avg: 0.280,
      hr: 11,
      r: 95,
      rbi: 65,
      sb: 11
    },
    {
      id: 3,
      name: 'Robinson Cano',
      fantasyTeam: 4,
      pos: '2B',
      avg: 0.289,
      hr: 19,
      r: 90,
      rbi: 80,
      sb: 5
    },
  ]
});

export default Player;
