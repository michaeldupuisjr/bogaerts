import DS from 'ember-data';

var Player = DS.Model.extend({
  cml: DS.attr('string'),
  name: DS.attr('string'),
  position: DS.attr('string'),
});

Player.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Xander Bogaerts',
      cml: '',
      position: '3B'
    },
    {
      id: 2,
      name: 'Dustin Pedroia',
      cml: 'Foo',
      position: '2B'
    }
  ]
});

export default Player;
