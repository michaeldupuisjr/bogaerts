import Ember from 'ember';
import DS from 'ember-data';

var Player = DS.Model.extend({
  name: DS.attr('string'),
  position: DS.attr('string'),
  fantasyTeam: DS.belongsTo('fantasy-team')
});

Player.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Xander Bogaerts',
      fantasyTeam: 4,
      position: '3B'
    },
    {
      id: 2,
      name: 'Dustin Pedroia',
      fantasyTeam: null,
      position: '2B'
    }
  ]
});

export default Player;
