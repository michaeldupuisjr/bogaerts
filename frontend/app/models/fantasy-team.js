// import DS from 'ember-data';

var FantasyTeam = DS.Model.extend({
  abbreviation: DS.attr('string'),
  players: DS.hasMany('player')
});

FantasyTeam.reopenClass({
  FIXTURES: [
    {
      id: 1,
      abbreviation: 'MG'
    },
    {
      id: 2,
      abbreviation: 'SR'
    },
    {
      id: 3,
      abbreviation: 'MC'
    },
    {
      id: 4,
      abbreviation: 'MD'
    },
    {
      id: 5,
      abbreviation: 'BW'
    },
    {
      id: 6,
      abbreviation: 'JW'
    },
    {
      id: 7,
      abbreviation: 'DW'
    },
    {
      id: 8,
      abbreviation: 'TM'
    },
  ]
});

export default FantasyTeam;
