import Ember from 'ember';
import DS from 'ember-data';

var Player = DS.Model.extend({
  hr: DS.attr('number'),
  name: DS.attr('string'),
  pa: DS.attr('number'),
  position: DS.attr('string'),
  fantasyTeam: DS.belongsTo('fantasy-team')
});

Player.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Xander Bogaerts',
      fantasyTeam: 4,
      position: '3B',
      pa: 604,
      hr: 18
    },
    {
      id: 2,
      name: 'Dustin Pedroia',
      fantasyTeam: null,
      position: '2B',
      pa: 658,
      hr: 11
    }
  ]
});

export default Player;
